import css from './CardsList.module.scss';
import {Card} from '../Card/Card';

export const CardsList = ({cardsData}) => {
   return (
      <>
         {cardsData.length > 0 && <div className={css.wrapper}>
            <ul className={css.list}>
               {cardsData.map(({id, title, text, link, src}) => (
                  <Card key={id}
                        title={title}
                        text={text}
                        link={link}
                        id={id}
                        src={src}
                  />
               ))}
            </ul>
         </div>}
      </>
   );
};