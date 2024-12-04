import React, { useEffect, useRef, useState } from 'react'
import jsPreviewExcel, { JsExcelPreview } from '@js-preview/excel'
import '@js-preview/excel/lib/index.css'
import { Spin } from 'antd'

export interface Props {
  fileInfo: string
}

const ExcelView = (props: Props) => {
  const { fileInfo } = props
  const excelContainerRef = useRef<HTMLDivElement | null>(null)
  const excelPreviewerRef = useRef<JsExcelPreview | null>(null) // 保存 myExcelPreviewer 的引用
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const containerElement = excelContainerRef.current

    if (containerElement && !excelPreviewerRef.current) {
      // 初始化 myExcelPreviewer，并保存引用
      const myExcelPreviewer = jsPreviewExcel.init(containerElement)
      excelPreviewerRef.current = myExcelPreviewer

      setIsLoading(true) // 开始加载时设置 loading 状态

      myExcelPreviewer
        .preview(fileInfo)
        .then(() => {
          setIsLoading(false) // 预览完成后取消 loading 状态
          console.info('预览完成')
        })
        .catch((e) => {
          setIsLoading(false) // 预览失败后取消 loading 状态
          console.info('预览失败', e)
        })
    }
  }, [fileInfo])

  return (
    <div className="relative h-full">
      <div ref={excelContainerRef} className="h-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <Spin size="large" />
        </div>
      )}
    </div>
  )
}

export default ExcelView

