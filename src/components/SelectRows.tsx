import React from 'react'

type SelectRowsProps = {
  handleModalClose: ()=>void
}

const SelectRows = (props:SelectRowsProps)=>{
  return(
    <>
            <button type='button' onClick={props.handleModalClose}>✕</button>
        <h2>列の表示切り替え</h2>
        <div>
          <div>表示</div>
          <div>
            <input type="checkbox" />期
            <input type="checkbox" />テーマ名
            <input type="checkbox" />サブテーマ名
            <input type="checkbox" />・・・
          </div>
        </div>
        <div>
          <button type='button'>→</button>
          <button type='button'>←</button>
        </div>
        <div>
          <div>非表示</div>
          <div>
            <input type="checkbox" />特許
            <input type="checkbox" />・・・
          </div>
        </div>
        <button type='button'>OK</button>
        <button type='button' onClick={props.handleModalClose}>キャンセル</button>

    </>
  )
}

export default SelectRows