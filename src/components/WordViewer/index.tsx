
import { useEffect  } from "react";
import * as docx from "docx-preview";

const WordViewer: React.FC<{

}> = ({ }) => {

    useEffect(() => {
        fetch('http://tiantiankaixin.site/123456.docx').then(response=>{
            return response.arrayBuffer()
        }).then(res =>{
            docx.renderAsync(res, document.getElementById("panel-section"))
            .then((x) => console.log("docx: finished"));
        })
       
    }, [])
    return (
        <div id="panel-section"></div>
    )
}

export default WordViewer