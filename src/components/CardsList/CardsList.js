import css from './CardsList.module.scss';
import {Card} from '../Card/Card';

export const CardsList = () => {
   return (
      <>
         <ul className={css.list}>
            <Card/>
         </ul>
      </>
   );
};