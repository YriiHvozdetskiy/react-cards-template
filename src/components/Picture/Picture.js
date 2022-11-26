import {useRef, useState, useEffect} from 'react';
import css from './Picture.module.scss';

export const Picture = () => {

   const [file, setFile] = useState(null);
   const [fileDataURL, setFileDataURL] = useState(null);

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