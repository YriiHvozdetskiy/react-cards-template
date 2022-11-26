import {useState} from 'react';
import css from './Picture.module.scss';

export const Picture = () => {

   const [imgSrc, setimgSrc] = useState('');

   // getInitialState: function(){
   //    return{file: []}
   // }
   //
   // _onChange: function(){
   //    // Assuming only image
   //    var file = this.refs.file.files[0];
   //    var reader = new FileReader();
   //    var url = reader.readAsDataURL(file);
   //
   //    reader.onloadend = function (e) {
   //       this.setState({
   //          imgSrc: [reader.result];
   //       })
   //    }.bind(this);
   //    console.log(url) // Would see a path?
   //    // TODO: concat files
   // },
   //
   // render: function(){
   //    return(
   //       <div>
   //          <form>
   //             <input
   //                ref="file"
   //                type="file"
   //                name="user[image]"
   //                multiple="true"
   //                onChange={this_onChange}/>
   //          </form>
   //          {/* Only show first image, for now. */}
   //          <img src={this.state.imgSrc} />
   //       </div>
   //    )
   // }

   // function onImageInput () {
   //    const reader = new FileReader();
   //
   //    reader.addEventListener('load', () => {
   //       let uploadedImage = reader.result;
   //       refs.imageDisplay.src = uploadedImage;
   //    });
   //    reader.readAsDataURL(this.files[0]);
   // }

   const loadHandler = () => {
      const reader = new FileReader();
      let uploadedImage = reader.result;
   };

   return <>
      <label className={css.imageWrapper}>
         Картинка
         <input className={css.imageInput} type="file" accept="image/*" onLoad={loadHandler}/>
         <img className={css.imageDisplay}
              src={imgSrc}
              alt=""/>
      </label>
   </>;
};