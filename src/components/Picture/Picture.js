import {useState, useEffect} from 'react';
import css from './Picture.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getFileData} from '../../redux/cards/cardsSelectors';
import {setFileData} from '../../redux/cards/cardsSlice';

export const Picture = ({onSubmit}) => {

   const data = useSelector(getFileData);
   const dispatch = useDispatch();
   const [file, setFile] = useState(null);
   //TODO удалити картинку не використовуючи Redux

   // const [fileDataURL, setFileDataURL] = useState(null);

   useEffect(() => {
      let fileReader, isCancel = false;

      if (file) {
         fileReader = new FileReader();
         fileReader.onload = (e) => {
            const {result} = e.target;
            if (result && !isCancel) {
               dispatch(setFileData(result));
               // setFileDataURL(result);
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

   // onSubmit(fileDataURL);
   onSubmit(data);
   console.log('data',data)

   return <>
      <label className={css.imageWrapper}>
         Картинка
         <input className={css.imageInput}
                type="file"
                accept="image/*"
                multiple
                onChange={changeHandler}/>
         <img className={css.imageDisplay}
              src={data}
              alt=""/>
      </label>
   </>;
};