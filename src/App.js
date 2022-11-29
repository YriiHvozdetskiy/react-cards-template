import {DashboardPage} from './pages';
import {useEffect} from 'react';
import {getParseCookie} from './components/Cookie';
import {addCookieInRedux} from './redux/cards/cardsSlice';
import {useDispatch} from 'react-redux';

export const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const myCookie = getParseCookie().reverse();
      if (myCookie.length > 0) {
         dispatch(addCookieInRedux(myCookie));
      }
   });

   return (
      <>
         <DashboardPage/>
      </>
   );
};
