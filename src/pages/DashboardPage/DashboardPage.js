import {CardsForm} from '../../components/CardsForm/CardsForm';
import css from './DashboardPage.module.scss';
import {CardsList} from '../../components/CardsList/CardsList';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCards, getDeleteItems} from '../../redux/cards/cardsSelectors';
import {Paginate} from '../../components/Paginate/Paginate';
import {LoadMore} from '../../components/LoadMore/LoadMore';
import {doSomething, setCookie} from '../../components/Cookie';
import {addCookieInRedux} from '../../redux/cards/cardsSlice';

export const DashboardPage = () => {
   const cardsData = useSelector(getCards);
   const deleteItems = useSelector(getDeleteItems);
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(9);

   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;

   let currentPosts = [];

   if (cardsData.length > 0) {
      currentPosts = cardsData.slice(firstPostIndex, lastPostIndex);
   } else {
      currentPosts = doSomething();
      // setTimeout(() => {
      //    dispatch(addCookieInRedux(currentPosts));
      // }, 200);
   }

   const loadMoreHandler = () => {
      setPostsPerPage(prevState => prevState + 9);
   };

   return <main>
      <section>
         <div className={css.container}>
            <CardsForm/>
            <CardsList cardsData={currentPosts}/>
            {cardsData.length > postsPerPage && <Paginate totalPosts={cardsData.length}
                                                          postsPerPage={postsPerPage}
                                                          setCurrentPage={setCurrentPage}
                                                          currentPage={currentPage}/>}

            {cardsData.length > postsPerPage && <LoadMore loadMore={loadMoreHandler}/>}
         </div>
      </section>
   </main>;
};