import css from './Card.module.scss';

export const Card = () => {
   return (
      <>
         <li className={css.item}>
            <a href="" className={css.link}>
               <div className={css.container}>
                  <img src="" alt=""/>
               </div>
               <ul className={css.list}>
                  <li className={css.title}>авіаів</li>
                  <li className={css.text}>іва</li>
               </ul>
            </a>
         </li>
      </>
   );
};