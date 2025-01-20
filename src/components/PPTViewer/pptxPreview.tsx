import React, { useState, useEffect, useRef } from 'react';
import {init} from 'pptx-preview'
const PptxPreview = ({url}) => {
    // const [text,setText] = useState('')
  // const pptxWrapperRef = useRef(null);

    // const  pptxWrapperRef = document.querySelector('#pptx-wrapper-h5')
    useEffect(()=>{
      // setText('开始')
      // let timer = setInterval(() => { 
      //   if(document.querySelector('.pptx-preview-wrapper').children.length>0){
      //     setText('结束')
      //     clearInterval(timer)
      //   }
      // }, 500);
     
      let pptxPrviewer = init(document.getElementById('pptx-wrapper'), {width:375,height:667})
      fetch(url).then(response => {
        
        return response.arrayBuffer()
      }).then(res => {
        // setText('请求结束')
        pptxPrviewer.preview(res)
      }) 
    },[])
    
  return (  
   <div>
    {/* {text} */}
     <div id='pptx-wrapper' style={{width: '100%', height: '100%'}}>

</div>
   </div>

  );
};

export default PptxPreview;