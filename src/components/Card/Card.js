import css from './Card.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getCards} from '../../redux/cards/cardsSelectors';
import {remove} from '../../redux/cards/cardsSlice';

export const Card = ({title, text, link, id}) => {
   const cards = useSelector(getCards);
   const dispatch = useDispatch();

   const removeCard = (id) => {
      const value = cards.filter(el => el.id !== id);
      dispatch(remove(value));
   };

   return (
      <>
         <li className={css.item} id={id}>
            <a href={link}
               className={css.link}>
               <div className={css.container}>
                  <img src="" alt=""/>
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