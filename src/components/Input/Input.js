import {Field} from 'formik';
import style from './Input.module.scss';
import {ErrorText} from '../ErrorText/ErrorText';
import classNames from 'classnames/bind';
import * as Yup from 'yup';

let cx = classNames.bind(style);

export const validationSchema = Yup.object().shape({
   title: Yup.string()
      .max(20, 'Too Long! Max 20')
      .required('Required'),
   link: Yup.string().url(),
   text: Yup.string().max(250, 'Too Long! Max 250'),
});

export const initialValues = {
   title: '',
   link: '',
   text: '',
};

export const Input = ({type, name, placeholder, as, nameClass}) => {
   let css = cx({
      heading: nameClass === 'heading',
      link: nameClass === 'link',
      text: nameClass === 'text',
   });

   return <>
      <Field className={css}
             type={type}
             name={name}
             placeholder={placeholder}
             as={as}
      />
      <ErrorText name={name} tag={'p'}/>
   </>;
};