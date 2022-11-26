import css from './CardList.module.scss';
import {Card} from '../Card/Card';

export const CardList = () => {
   return (
      <>
         <ul className={css.list}>
            <Card/>
         </ul>
      </>
   );
};