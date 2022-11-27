import {Field} from 'formik';
import css from './Input.module.scss';
import {ErrorText} from '../ErrorText/ErrorText';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
   title: Yup.string()
      .max(20, 'максимум 20 символів')
      .required('Required')
      .matches(/^[А-Яа-яЁёІі\s]+$/, "підтримуюється лише кирилиця"),
   link: Yup.string().url('не валідне посилання'),
   text: Yup.string()
      .max(250, 'максимум 20 символів')
      .matches(/^[А-Яа-яЁёІі\s]+$/, "підтримуюється лише кирилиця"),
});

export const initialValues = {
   title: '',
   link: '',
   text: '',
};

export const Input = ({type, name, placeholder, as, nameClass}) => {


   return <>
      <Field className={css[nameClass]}
             type={type}
             name={name}
             placeholder={placeholder}
             as={as}
      />
      <ErrorText name={name} tag={'p'}/>
   </>;
};