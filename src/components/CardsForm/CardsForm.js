import {Formik, Form} from 'formik';
import css from './CardsForm.module.scss';
import {Picture} from '../Picture/Picture';
import {Input, validationSchema, initialValues} from '../Input/Input';
import {useDispatch} from 'react-redux';
import {add} from '../../redux/cards/cardsSlice';
import {nanoid} from 'nanoid';

export const CardsForm = () => {
   const dispatch = useDispatch();

   const handleSubmit = (values, {resetForm}) => {
      const value = {
         ...values,
         id: nanoid(),
      };
      dispatch(add(value));
      resetForm();
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}>
         <Form className={css.form} autoComplete="off">
            <Picture/>
            <div className={css.wrapper}>
               <ul className={css.formList}>
                  <li className={css.formItem}>
                     <Input type={'text'}
                            name={'title'}
                            placeholder={'Заголовок'}
                            nameClass={'heading'}/>
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