import {CardsForm} from '../../components/CardsForm/CardsForm';
import css from './DashboardPage.module.scss';
import {CardList} from '../../components/CardList/CardList';

export const DashboardPage = () => {
   return <main>
      <section>
         <div className={css.container}>
            <CardsForm/>
            <CardList/>
         </div>
      </section>
   </main>;
};