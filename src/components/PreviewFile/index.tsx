
import FileViewer from 'react-file-viewer';
import './index.css'

const PreviewFile: React.FC<{

}> = ({ }) => {
  const onError = (err: Error) => console.log(err)
  return (
    <div style={{ height: '100vh' }}>
      <FileViewer
        fileType='xlsx'
        filePath='/xls200.xlsx'
        settings={
          {
            scale: 1.5,
            resolution: 300,
            renderingMode: 'canvas',
          }
        }
        onError={onError} //函数[可选]：当文件查看器在获取或呈现请求的资源时发生错误时将调用的函数。在这里可以传递日志记录实用程序的回调。
        errorComponent={console.log("出现错误")} //[可选]：发生错误时呈现的组件，而不是react-file-viewer随附的默认错误组件。
        unsupportedComponent={console.log("不支持")} //[可选]：在不支持文件格式的情况下呈现的组件。

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