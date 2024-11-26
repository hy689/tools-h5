
import FileViewer from 'react-file-viewer';
import './index.css'

const PreviewFile: React.FC<{
    
}> = ({ }) => {
    return (
        <div style={{height:'100vh'}}>
             <FileViewer
              fileType='docx'
              filePath='http://tiantiankaixin.site/123456.docx'
            />
            {/* <FileViewer
              fileType='xlsx'
              filePath='http://tiantiankaixin.site/xls.xlsx'
            /> */}
{/* 
            <FileViewer
              fileType='pdf'
              filePath='http://tiantiankaixin.site/pdf66.pdf'
            /> */}
        </div>
    )
}

export default PreviewFile