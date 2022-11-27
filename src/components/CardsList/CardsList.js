import css from './CardsList.module.scss';
import {Card} from '../Card/Card';
import {useSelector} from 'react-redux';
import {getCards, getCardsLength} from '../../redux/cards/cardsSelectors';
import {useEffect, useState} from 'react';

export const CardsList = () => {

   const cards = useSelector(getCards);
   const [limit, setLimit] = useState(9);

   const limitCards = cards.slice(0, limit);

   const loadMore = () => {
      setLimit(prevState => prevState + 9);
   };

   return (
      <>
         {cards.length > 0 && <div className={css.wrapper}>
            <ul className={css.list}>
               {limitCards.map(({id, title, text, link, src}) => (
                  <Card
                     key={id}
                     title={title}
                     text={text}
                     link={link}
                     id={id}
                     src={src}
                  />
               ))}
            </ul>
            {cards.length > limit && <button type={'button'}
                                         className={css.button}
                                         onClick={loadMore}>
               Завантажити більше</button>}
         </div>}
      </>
   );
};