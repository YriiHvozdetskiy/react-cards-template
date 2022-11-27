import css from './LoadMore.module.scss';

export const LoadMore = ({loadMore}) => {
   return (
      <>
         <button type={'button'}
                 className={css.button}
                 onClick={loadMore}>
            Завантажити більше
         </button>
      </>
   );
};