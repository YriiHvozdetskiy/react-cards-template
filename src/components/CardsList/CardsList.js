import css from './CardsList.module.scss';
import {Card} from '../Card/Card';
import {useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';

export const CardsList = () => {
   const cards = useSelector(getCards);

   return (
      <>
         {cards.length > 0 && <ul className={css.list}>
            {cards.map(el => (
               <Card
                  key={el.id}
                  title={el.title}
                  text={el.text}
                  link={el.link}
                  id={el.id}
               />
            ))}
         </ul>}
      </>
   );
};