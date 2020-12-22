import React, { useState } from 'react'

type SelectRowsProps = {
  HeaderRow: string[]
  HeaderRowOriginal: string[]
  handleModalClose: () => void
}

const SelectRows = (props: SelectRowsProps) => {
  const HeaderRow = props.HeaderRow
  const [HeaderRowState, setHeaderRowState] = useState(HeaderRow)
  const headerRowHidden = props.HeaderRowOriginal.filter(i => HeaderRowState.indexOf(i) === -1)
  const [headerRowHiddenState, setHeaderRowHidden] = useState(headerRowHidden)
  let array1: string[] = []
  const pushArray1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    array1.indexOf(event.target.value) === -1
      ? array1.push(event.target.value)
      : array1 = array1.filter((item) => {
        return item !== event.target.value
      })
  }
  let array2: string[] = []
  const pushArray2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    array2.indexOf(event.target.value) === -1
      ? array2.push(event.target.value)
      : array2 = array2.filter((item) => {
        return item !== event.target.value
      })
  }
  const checkboxesDisplay = HeaderRowState.map((row: string) =>
    <label>
      <input
        type='checkbox'
        name='checkboxDisplay'
        value={row}
        onChange={pushArray1}
      />{row}<br />
    </label>
  )
  const checkboxesHidden = headerRowHiddenState.map((row: string) =>
    <label>
      <input
        type='checkbox'
        name='checkboxHidden'
        value={row}
        onChange={pushArray2}
      />{row}
    </label>
  )
  //チェックされているvalueの配列を作りたい
  const hideCheckboxes = () => {
    const newArrayHidden = headerRowHiddenState.concat(array1)
    setHeaderRowHidden(newArrayHidden)
    const newArrayDisplay = HeaderRowState.filter(i => array1.indexOf(i) === -1)
    setHeaderRowState(newArrayDisplay)
  }
  const displayCheckboxes = () => {
    console.log(array2)
    const newArrayHidden = headerRowHiddenState.filter(i => array2.indexOf(i) === -1)
    setHeaderRowHidden(newArrayHidden)
    const newArrayDisplay = HeaderRowState.concat(array2)
    setHeaderRowState(newArrayDisplay)
  }

  return (
    <>
      <button type='button' onClick={props.handleModalClose}>✕</button>
      <h2>列の表示切り替え</h2>
      <div>
        <div>表示</div>
        <div>
          {checkboxesDisplay}
        </div>
      </div>
      <div>
        <button type='button' onClick={hideCheckboxes}>→</button>
        <button type='button' onClick={displayCheckboxes}>←</button>
      </div>
      <div>
        <div>非表示</div>
        <div>
          {checkboxesHidden}
        </div>
      </div>
      <button type='button'>OK</button>
      <button type='button' onClick={props.handleModalClose}>キャンセル</button>

    </>
  )
}

export default SelectRows