import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import css from './CardsForm.module.scss';
import {Picture} from '../Picture/Picture';
import {Input} from '../Input/Input';

// must be cyrillic
// ^[А-Яа-яЁё\\s]+$

const validationSchema = Yup.object().shape({
   title: Yup.string()
      .max(20, 'Too Long! Max 20')
      .required('Required'),
   link: Yup.string().url(),
   text: Yup.string().max(250, 'Too Long! Max 250'),
});

const initialValues = {
   title: '',
   link: '',
};

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
                     />
                  </li>
                  <li className={css.formItem}>
                     <Input type={'url'}
                            name={'link'}
                            placeholder={'Силка'}/>
                  </li>
                  <li className={css.formItem}>
                     <Input name={'text'}
                            placeholder={'Текст'}
                            as={'textarea'}
                     />
                  </li>
               </ul>
               <button className={css.fromBtn} type="submit">Создати</button>
            </div>
         </Form>
      </Formik>
   );
};