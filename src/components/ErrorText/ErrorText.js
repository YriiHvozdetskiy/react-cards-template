import {ErrorMessage} from 'formik';

export const ErrorText = ({name,tag}) => {
   return <>
      <ErrorMessage name={name} component={tag}/>
   </>;
};