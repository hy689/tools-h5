import PPTViewer from "../components/PPTViewer"
import PreviewFile from "../components/PreviewFile"
import PdfViewer from "../components/PDFViewer"
import WordViewer from "../components/WordViewer"
import ExcelView from "../components/ExcelView"
const Preview = () => {
    return (
        <div style={{ height: '100vh' }}>
            {/* 预览excel */}
            <ExcelView fileInfo="/xls.xlsx"></ExcelView>

            {/* 预览word */}
            {/* <WordViewer></WordViewer> */}

            {/* 预览ppt */}
            {/* <PPTViewer></PPTViewer> */}

            {/* 预览pdf */}
            {/* <PdfViewer ></PdfViewer> */}
        </div>
    )
}

export default Preview