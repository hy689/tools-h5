import PPTViewer from "../components/PPTViewer"
import PreviewFile from "../components/PreviewFile"
import PdfViewer from "../components/PDFViewer"
import WordViewer from "../components/WordViewer"
import ExcelView from "../components/ExcelView"

const Preview = () => {
            // const url = "https://szrz-uat.test.cgbchina.com.cn/gd/hrsaas/webapi/api/archive/v3/download/61167c7710414313a92c4272e9b3a479/100.pdf"

    // const url = "https://szrz-uat.test.cgbchina.com.cn/gd/hrsaas/webapi/api/archive/v3/download/8ac6f30d493a4752a3c4c977775df1f4/100.pptx"
    const download = () => {
        window.location.href = '/download.html?fileurl='+url
        // const fileName = url.substring(url.lastIndexOf("/") + 1)

        // window.AlipayJSBridge.call("downloadPdf", { url },(res)=>{
        //     if(res.data){
        //         // console.log(res)
        //         window.AlipayJSBridge.call("downLoadAndSaveFile", { pdfStr:res.data,title:'q2.pdf' },function(res2){
        //             console.log('完事了')
        //             alert('下载成功')
        //         })      
        //     }
            
        // })

        
        // window.location.href = url
        // fetch(url).then((response) => {
        //     response.blob().then((blob) => {
        //         var eleLink = document.createElement('a');
        //         eleLink.download = fileName;
        //         eleLink.style.display = 'none';
        //         // 字符内容转变成blob地址
        //         var blob = new Blob([blob]);
        //     　　 // 简单的理解一下就是将一个file或Blob类型的对象转为UTF-16的字符串，并保存在当前操作的document
        //         eleLink.href = URL.createObjectURL(blob);
        //         // 触发点击
        //         document.body.appendChild(eleLink);
        //         eleLink.click();
        //         // 然后移除
        //         document.body.removeChild(eleLink);
        //     })
        // })
    }

    
    return (
        <div style={{ height: '100vh' }}>
            {/* <button onClick={download}>下载</button>
            <a href={url} download='100'>点击我 </a> */}
            {/* 预览excel */}
            <ExcelView fileInfo="/阿拉钉系统说明清单.xlsx"></ExcelView>

            {/* 预览word */}
            {/* <WordViewer></WordViewer> */}
            {/* 预览ppt */}
            {/* <PPTViewer url="/阿拉钉系统说明清单.xlsx"></PPTViewer> */}
            {/* <PPTViewer url="https://szrz-uat.test.cgbchina.com.cn/gd/hrsaas/webapi/api/archive/v3/download/0215db9444494bc8ad142cfec6673ddf/9mb.pptx"></PPTViewer> */}
            {/* <PPTViewer url="https://szrz-uat.test.cgbchina.com.cn/gd/hrsaas/webapi/api/archive/v3/download/7fb57e44e68a4106a46d86a27e71a799/10mb.pptx"></PPTViewer> */}
            {/* 预览pdf */}
            {/* <PdfViewer ></PdfViewer> */}
        </div>
    )
}

export default Preview