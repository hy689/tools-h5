
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
import { useEffect, useState } from "react";


const PdfViewer: React.FC<{

}> = ({ }) => {

    useEffect(() => {
        const pdf = new Pdfh5('#demo', {
            pdfurl: "/java.pdf",
        })


        pdf.on("complete", function (status, msg, time) {
            console.log("状态：" + status + "，信息：" + msg + "，耗时：" + time + "毫秒，总页数：" )
            //禁止手势缩放
            pdf.zoomEnable(false);
          })
    }, [])
    return (
        <div id="demo"></div>
    )
}

export default PdfViewer