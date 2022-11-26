import {CardsForm} from '../../components/CardsForm/CardsForm';
import css from './DashboardPage.module.scss';
import {CardsList} from '../../components/CardsList/CardsList';

export const DashboardPage = () => {
   return <main>
      <section>
         <div className={css.container}>
            <CardsForm/>
            <CardsList/>
         </div>
      </section>
   </main>;
};