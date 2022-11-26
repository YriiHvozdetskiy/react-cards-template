import {Formik, Form} from 'formik';
import css from './CardsForm.module.scss';
import {Picture} from '../Picture/Picture';
import {Input, validationSchema, initialValues} from '../Input/Input';

// must be cyrillic
// ^[А-Яа-яЁё\\s]+$

export const CardsForm = () => {

   const handleSubmit = (values, {resetForm}) => {
      console.log(values);
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