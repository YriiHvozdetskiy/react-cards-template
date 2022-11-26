import {Field} from 'formik';
import css from './Input.module.scss';
import {ErrorText} from '../ErrorText/ErrorText';

export const Input = ({type, name, placeholder, as}) => {

   return <>
      <Field className={css.heading}
             type={type}
             name={name}
             placeholder={placeholder}
             as={as}
      />
      <ErrorText/>
   </>;
};