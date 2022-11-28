import {DashboardPage} from './pages';
import {useEffect} from 'react';
import { getParseCookie} from './components/Cookie';
import {addCookieInRedux} from './redux/cards/cardsSlice';
import {useDispatch} from 'react-redux';

export const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      //перевірити кукі
      const myCookie = getParseCookie().reverse();
      console.log('myCookie', myCookie);
      if (myCookie.length > 0) {
         dispatch(addCookieInRedux(myCookie));
      }

      // якщо є  записати дані в стор
      //з стора робити карточки
      // при створені карточки додатив кукі а поітім в стор
   });
   return (
      <>
         <DashboardPage/>
      </>
   );
};
