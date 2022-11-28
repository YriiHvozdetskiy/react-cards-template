import css from './Card.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';
import {addCookie, remove, saveRemoveCard} from '../../redux/cards/cardsSlice';
import {getCookie} from '../Cookie';

export const Card = ({title, text, link, id, src}) => {
   const cards = useSelector(getCards);
   const dispatch = useDispatch();

   const removeCard = (id) => {
      const value = cards.filter(el => el.id !== id);
      const removeCard = cards.find(el => el.id === id);
      dispatch(remove(value));
      dispatch(saveRemoveCard(removeCard));
      console.log('cards',cards)
   };

   return (
      <>
         <li className={css.item} id={id}>
            <a href={link}
               className={css.link}>
               <div className={css.container}>
                  <img src={src} alt=""/>
               </div>
               <ul className={css.list}>
                  <li className={css.title}>{title}</li>
                  <li className={css.text}>{text}</li>
               </ul>
            </a>
            <button className={css.button}
                    type={'button'}
                    onClick={() => removeCard(id)}
            >Видалити
            </button>
         </li>
      </>
   );
};