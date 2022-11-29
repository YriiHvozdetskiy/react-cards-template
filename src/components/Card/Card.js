import css from './Card.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';
import {remove, saveRemoveCard} from '../../redux/cards/cardsSlice';
import {getParseCookie, updateCookie} from '../Cookie';

export const Card = ({title, text, link, id, src}) => {
   const cards = useSelector(getCards);
   const dispatch = useDispatch();

   const removeCard = (id) => {
      const value = cards.filter(el => el.id !== id);
      const removeCard = cards.find(el => el.id === id);
      dispatch(remove(value));
      dispatch(saveRemoveCard(removeCard));
      const myCookie = getParseCookie();
      const removeCookie = myCookie.filter(el => el.id !== id);
      updateCookie('cards', removeCookie);
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