import css from './CardsList.module.scss';
import {Card} from '../Card/Card';
import {useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';
import {useEffect} from 'react';

export const CardsList = () => {
   const cards = useSelector(getCards);

   return (
      <>
         {cards.length > 0 && <div className={css.wrapper}>
            <ul className={css.list}>
               {cards.map(({id, title, text, link, src}) => (
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
            {cards.length > 9 && <button type={'button'} className={css.button}>Завантажити більше</button>}
         </div>}
      </>
   );
};