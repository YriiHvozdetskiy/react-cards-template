import css from './CardsList.module.scss';
import {Card} from '../Card/Card';
import {LoadMore} from '../LoadMore/LoadMore';

export const CardsList = ({cardsData,postsPerPage,setPostsPerPage}) => {

   const loadMoreHandler = () => {
      setPostsPerPage(prevState => prevState + 9);
   };

   console.log('postsPerPage',postsPerPage)
   console.log('cardsData.length',cardsData.length)
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
            {cardsData.length >= postsPerPage && <LoadMore loadMore={loadMoreHandler}/>}
         </div>}
      </>
   );
};