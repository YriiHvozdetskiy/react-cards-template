import {Formik, Form} from 'formik';
import css from './CardsForm.module.scss';
import {Picture} from '../Picture/Picture';
import {Input, validationSchema, initialValues} from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {add, setFileData} from '../../redux/cards/cardsSlice';
import {nanoid} from 'nanoid';
import {getCards} from '../../redux/cards/cardsSelectors';
import {setCookie} from '../Cookie';

export const CardsForm = () => {
   const dispatch = useDispatch();
   const cards = useSelector(getCards);

   const value = {};

   if (cards.length > 0) setCookie('cards', cards, 2);

   const handleSubmit = (values, {resetForm}) => {

      const data = {
         ...value,
         ...values,
         id: nanoid(),
      };

      dispatch(add(data));
      dispatch(setFileData(null));
      setCookie('cards', cards, 2);
      resetForm();
   };

   const getSrcOnSubmit = (src) => {
      value.src = src;
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}>
         <Form className={css.form} autoComplete="off">
            <Picture onSubmit={getSrcOnSubmit}/>
            <div className={css.wrapper}>
               <ul className={css.formList}>
                  <li className={css.formItem}>
                     <Input type={'text'}
                            name={'title'}
                            placeholder={'Заголовок'}
                            nameClass={'heading'}
                     />
                  </li>
                  <li className={css.formItem}>
                     <Input type={'url'}
                            name={'link'}
                            placeholder={'Силка'}
                            nameClass={'link'}/>
                  </li>
                  <li className={css.formItem}>
                     <Input name={'text'}
                            placeholder={'Текст'}
                            as={'textarea'}
                            nameClass={'text'}/>
                  </li>
               </ul>
               <button className={css.fromBtn} type="submit">Создати</button>
            </div>
         </Form>
      </Formik>
   );
};