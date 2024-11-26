
import {init} from 'pptx-preview'
import { useEffect,useState } from 'react'



const PreviewFile: React.FC<{
   
}> = ({ }) => {
    const [loading, setLoading] = useState(true)
    //调用库的init方法生成一个预览器
    useEffect(() => {
        
        
        //获取文件或者读取文件，获取文件的 ArrayBuffer格式数据，传给组件进行预览
        fetch('http://tiantiankaixin.site/ppt200.pptx').then(response=>{
            return response.arrayBuffer()
        }).then(res =>{
            setLoading(false)
            let pptxPrviewer = init(document.getElementById('pptx-wrapper'), {
                width: 390,
                height: 844
            })
            //调用预览器的preview方法
            pptxPrviewer.preview(res)
        })
    })
    return (
        <div>
            {loading ?<div>loading</div> : <div id='pptx-wrapper'></div> }
           
        </div>
    )
}

export default PreviewFile