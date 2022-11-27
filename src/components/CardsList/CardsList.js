import css from './CardsList.module.scss';
import {Card} from '../Card/Card';
import {useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';

export const CardsList = () => {
   const cards = useSelector(getCards);

   return (
      <>
         {cards.length > 0 && <ul className={css.list}>
            {cards.map(({id,title,text,link,src}) => (
               <Card
                  key={id}
                  title={title}
                  text={text}
                  link={link}
                  id={id}
                  src={src}
               />
            ))}
         </ul>}
      </>
   );
};