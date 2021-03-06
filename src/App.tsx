import React, { useState } from 'react';
import Modal from "react-modal";
import SelectRows from './components/SelectRows';

Modal.setAppElement("#root");

const App =()=> {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const handleModalOpen: () => void = () => {
    setIsModalOpen(true)
  }
  const handleModalClose: () => void = () => {
    setIsModalOpen(false)
  }
  const customStyles = {
    content: {
      width: 400,
      height: 500
    }
  }

  //追々データベースを参照するようにしたい
  const HeaderRow: string[] = [
    '期',
    'テーマ名',
    'サブテーマ名',
    'テーマコード',
    '担当者',
    '管理者',
    '中期計画書',
    '年間計画書',
    '進捗',
    'スケジュール',
    '報告会議資料',
    '議事録',
    '週報',
    '研究報告書',
    '試験依頼書',
    '生データ',
    'サンプル履歴',
    '参考文献',
    '特許',
  ]
  const HeaderRowOriginal: string[] = [
    '期',
    'テーマ名',
    'サブテーマ名',
    'テーマコード',
    '担当者',
    '管理者',
    '中期計画書',
    '年間計画書',
    'リソース表',
    '進捗',
    'スケジュール',
    '報告会議資料',
    '議事録',
    '動画',
    '文字起こしデータ',
    '週報',
    '研究報告書',
    '試験依頼書',
    '生データ',
    'サンプル履歴',
    '参考文献',
    '研究費',
    '特許',
  ]
  const rows = [
    [
      '2019.1Q',
      'テーマ1',
      'サブテーマ1',
      'ABC9',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2019.2Q',
      'テーマ1',
      'サブテーマ1',
      'ABC9',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2019.3Q',
      'テーマ1',
      'サブテーマ1',
      'ABC9',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2019.4Q',
      'テーマ1',
      'サブテーマ1',
      'ABC9',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2020.1Q',
      'テーマ1',
      'サブテーマ1',
      'ABC0',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2020.2Q',
      'テーマ1',
      'サブテーマ1',
      'ABC0',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2020.3Q',
      'テーマ1',
      'サブテーマ1',
      'ABC0',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2020.4Q',
      'テーマ1',
      'サブテーマ1',
      'ABC0',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '2021.1Q',
      'テーマ1',
      'サブテーマ1',
      'ABC1',
      'Aさん',
      'C総括',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  ]



  const tableHeader = HeaderRow.map((row, index) =>
    <th>{row}</th>
  )
  const tableRows = rows.map((rows) =>
    <tr>
      {rows.map((row) =>
        <td>{row}</td>
      )}
    </tr>
  )
  const table =[
    <thead><tr>{tableHeader}</tr></thead>,
    <tbody>{tableRows}</tbody>,
    <tfoot></tfoot>
  ]
  return (
    <div>
      <h1>研究開発アウトライナー</h1>
      <button type='button' onClick={handleModalOpen}>列の表示切り替え</button>
      <button type='button'>ソート</button>
      <button type='button'>手動並び替え</button>
      <button type='button' onClick={() => console.log(tableRows)}>新しい行の追加</button>
      <table>
        {table}
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={customStyles}
      >
        <SelectRows 
          HeaderRow = {HeaderRow}
          HeaderRowOriginal = {HeaderRowOriginal}
          handleModalClose = {handleModalClose}
        />
      </Modal>
    </div>
  );
}

export default App;
