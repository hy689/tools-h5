import  { useEffect, useState } from 'react'
import canvasDatagrid from "canvas-datagrid";
import * as xlsx from "xlsx";

const ExcelView = (fileInfo) => {
  const [sheets, setSheets] = useState([])
  const [grid, setGrid] = useState(null)
  const [workbook, setWorkbook] = useState(null)

  useEffect(() => {
    fetch('/阿拉钉系统说明清单.xlsx').then(response => {
      return response.arrayBuffer()
    }).then(res => {
      const workbook = xlsx.read(res);

      const sheet = workbook.Sheets[workbook.SheetNames[0]]; // 这里取第 0 个 sheet
      const json = xlsx.utils.sheet_to_json(sheet); // 得到的 json 是解析之后的数据
      const grid = canvasDatagrid({
        parentNode: document.getElementById("excel"), // el 是 document 中的一个 DOM 元素
        data: json, // json 是前面解析得到 sheet 对应的数据
        editable: false, // 表示不使用表格编辑
        // ... // 下面是对表格的一些配置项
      });

      grid.style.width = "100%"; // 宽度为视口宽度
      grid.style.height = "calc(100vh - 40px)";

      setGrid(grid)
      setWorkbook(workbook)
      setSheets(workbook.SheetNames)
      console.log('sdjflkasjdflkjdaslkfjasdlkfjksld')
    })
  }, [])


  const pageTurning = (name) => {
    const sheet = workbook.Sheets[name]; // 这里取第 1 个 sheet
    const json = xlsx.utils.sheet_to_json(sheet);
    grid.data = json
  }

  return (
    <div>
      <div id='excel'>

      </div>
      <div style={{ height: '40px' }}>
        {sheets.map((item, index) => {
          return (
            <button onClick={() => pageTurning(item)} key={index}>{item}</button>
          )
        })}
      </div>
    </div>
  )
}

export default ExcelView

