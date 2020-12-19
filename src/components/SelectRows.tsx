import React from 'react'

type SelectRowsProps = {
  HeaderRow: string[]
  HeaderRowOriginal : string[]
  handleModalClose: () => void
}

const SelectRows = (props: SelectRowsProps) => {
  const checkboxsDisplay = props.HeaderRow.map((row: string) =>
    <div>
      <input type='checkbox' />{row}
    </div>
  )
  const headerRowHidden = props.HeaderRowOriginal.filter(i=>props.HeaderRow.indexOf(i)===-1)
  const checkboxsHidden = headerRowHidden.map((row: string) =>
  <div>
    <input type='checkbox' />{row}
  </div>
)
console.log(headerRowHidden)
  return (
    <>
      <button type='button' onClick={props.handleModalClose}>✕</button>
      <h2>列の表示切り替え</h2>
      <div>
        <div>表示</div>
        <div>
          {checkboxsDisplay}
        </div>
      </div>
      <div>
        <button type='button'>→</button>
        <button type='button'>←</button>
      </div>
      <div>
        <div>非表示</div>
        <div>
          {checkboxsHidden}
          </div>
      </div>
      <button type='button'>OK</button>
      <button type='button' onClick={props.handleModalClose}>キャンセル</button>

    </>
  )
}

export default SelectRows