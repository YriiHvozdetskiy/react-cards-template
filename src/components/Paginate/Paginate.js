import css from './Paginate.module.scss';

export const Paginate = (props) => {
   const {
      totalPosts,
      postsPerPage,
      setCurrentPage,
      currentPage,
   } = props;

   let pages = [];

   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i);
   }

   return (
      <div className={css.pagination}>
         {pages.map((page, index) => {
            return (
               <button type={'button'}
                       key={index}
                       onClick={() => setCurrentPage(page)}
                       className={page === currentPage ? css.active : ""}>
                  {page}
               </button>
            );
         })}
      </div>
   );
};