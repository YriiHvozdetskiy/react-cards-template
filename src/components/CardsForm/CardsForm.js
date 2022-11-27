import {Formik, Form} from 'formik';
import css from './CardsForm.module.scss';
import {Picture} from '../Picture/Picture';
import {Input, validationSchema, initialValues} from '../Input/Input';
import {useDispatch} from 'react-redux';
import {add} from '../../redux/cards/cardsSlice';
import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';

export const CardsForm = () => {
   const dispatch = useDispatch();
   const value = {};
   // const [clearSrc, setClearSrc] = useState('');


   const handleSubmit = (values, {resetForm}) => {

      const data = {
         ...value,
         ...values,
         id: nanoid(),
      };

      dispatch(add(data));
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