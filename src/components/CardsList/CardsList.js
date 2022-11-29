import css from './CardsList.module.scss';
import {Card} from '../Card/Card';
import {LoadMore} from '../LoadMore/LoadMore';
import {useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';

export const CardsList = ({cardsData, postsPerPage, setPostsPerPage, currentPage}) => {

   const cards = useSelector(getCards);

   const loadMoreHandler = () => {
      setPostsPerPage(prevState => prevState + 9);
   };

   const showLoadMore = cardsData.length >= postsPerPage && currentPage * cardsData.length < cards.length;

   return (
      <>
         {cardsData.length > 0 && <div className={css.wrapper}>
            <ul className={css.list}>
               {cardsData.map(({id, title, text, link, src}) => (
                  <Card key={id}
                        title={title}
                        text={text}
                        link={link}
                        id={id}
                        src={src}
                  />
               ))}
            </ul>
            {showLoadMore && <LoadMore loadMore={loadMoreHandler}/>}
         </div>}
      </>
   );
};