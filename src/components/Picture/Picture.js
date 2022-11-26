import {useRef, useState} from 'react';
import css from './Picture.module.scss';

export const Picture = () => {

   const [imgSrc, setImgSrc] = useState();
   // const file = useRef(null);

   // function onImageInput () {
   //    const reader = new FileReader();
   //
   //    reader.addEventListener('load', () => {
   //       let uploadedImage = reader.result;
   //       refs.imageDisplay.src = uploadedImage;
   //    });
   //    reader.readAsDataURL(this.files[0]);
   // }
   // console.log('file', file);
   const changeHandler = (e) => {
      const {files} = e.target;
      for (let i = 0; i < files.length; i++) {
         const file = files[i];
      }
      const fileReader = new FileReader();

      fileReader.onchange = (e) => {
         const {result} = e.target;
      };

      fileReader.readAsDataURL(fileObject);

      // ======================================

      // console.log('this',this)
      // var file = this.refs.file.files[0];
      // const reader = new FileReader();
      // var uploadedImage = reader.readAsDataURL(file);
      // // let uploadedImage = reader.result;
      //
      // reader.onloadend = function (e) {
      //    setImgSrc(uploadedImage);
      // }.bind(this);

      // ======================================

      // const reader = new FileReader();
      // var url = reader.readAsDataURL(this.files[0]);
      //
      // reader.onloadend = function (e) {
      //    setImgSrc(reader.result)

      // ======================================

      // const reader = new FileReader();
      //
      //    reader.addEventListener('load', () => {
      //       let uploadedImage = reader.result;
      //       // refs.imageDisplay.src = uploadedImage;
      //       setImgSrc(uploadedImage)
      //    });
      //    reader.readAsDataURL(this.files[0]);
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
              src={imgSrc}
              alt=""/>
      </label>
   </>;
};