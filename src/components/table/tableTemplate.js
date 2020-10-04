const CODES = {
  A: 65,
  Z: 90,
}
function createCell(_, index) {
  return `
    <div class="cell" contenteditable data-col='${index}'></div>
  `
}

function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col='${index}'>
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, index) {
  const resizer = index 
    ? `<div class='row-resize' data-resize="row"></div>` : ''
  return `
    <div class='row' data-type="resizable">
      <div class='row-info'>
        ${index ? index : ''}
        ${resizer}
      </div>
      <div class='row-data'>${content}</div>
    </div> 
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))

  const cells = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('')
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}