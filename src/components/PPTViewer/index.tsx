
import {init} from 'pptx-preview'
import { useEffect,useState,useRef } from 'react'



const PreviewFile: React.FC<{
   
}> = ({ }) => {
    const [loading, setLoading] = useState(false)
    const pptxWrapperRef = useRef(null)
    //调用库的init方法生成一个预览器
    useEffect(() => {
        
        setLoading(true)
        //获取文件或者读取文件，获取文件的 ArrayBuffer格式数据，传给组件进行预览
            fetch('/ppt800.pptx').then(response=>{
                return response.arrayBuffer()
            }).then(res =>{
                setLoading(false)
                let pptxPrviewer = init(pptxWrapperRef?.current, {
                    width: 390,
                    height: 844
                })
                //调用预览器的preview方法
                pptxPrviewer.preview(res)
            })
    },[])
    return (
        <div>
            { <div ref={pptxWrapperRef} id='pptx-wrapper'></div> }
           
        </div>
    )
}

export default PreviewFile