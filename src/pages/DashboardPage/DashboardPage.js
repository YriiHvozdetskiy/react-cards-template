import {CardsForm} from '../../components/CardsForm/CardsForm';
import css from './DashboardPage.module.scss';

export const DashboardPage = () => {
   return <main>
      <section>
         <div className={css.container}>
            <CardsForm/>
         </div>
      </section>
   </main>;
};