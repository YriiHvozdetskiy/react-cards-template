import {useRef, useState, useEffect} from 'react';
import css from './Picture.module.scss';
import {Field} from 'formik';
import {Input} from '../Input/Input';

export const Picture = ({onSubmit}) => {

   const [file, setFile] = useState(null);
   const [fileDataURL, setFileDataURL] = useState(null);
   // const imgRef = useRef('')

   useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
         fileReader = new FileReader();
         fileReader.onload = (e) => {
            const {result} = e.target;
            if (result && !isCancel) {
               setFileDataURL(result);
            }
         };
         fileReader.readAsDataURL(file);
      }
      return () => {
         isCancel = true;
         if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
         }
      };

   }, [file]);

   const changeHandler = (e) => {
      const file = e.target.files[0];
      setFile(file);
   };

   onSubmit(fileDataURL)
   // imgRef.current.src = ''
   // console.log('imgRef',imgRef)

   return <>
      <label className={css.imageWrapper}>
         Картинка
         <input className={css.imageInput}
                type="file"
                accept="image/*"
                multiple
                onChange={changeHandler}/>
         <img className={css.imageDisplay}
              src={fileDataURL}
              alt=""/>
      </label>
   </>;
};