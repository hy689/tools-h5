import PptxPreview from "./pptxPreview";
import Pptxjs from "./pptxjs";


const PPTViewer = ({url}) => {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return (
        <>
        {/* {isiOS?<PptxPreview url={url}></PptxPreview>:<Pptxjs url={url}></Pptxjs>} */}
        {/* {<PptxPreview url={url}></PptxPreview>} */}
        {<Pptxjs url={url}></Pptxjs>}
        </>
    )       
}

export default PPTViewer