import React,{useState} from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  const handleModalOpen:()=>void = ()=> {
    setIsModalOpen(true)
  }
  const handleModalClose:()=>void = ()=> {
    setIsModalOpen(false)
  }
  const customStyles = {
    content: {
      width:400,
      height:500
    }
  }

  return (
    <div>
      <h1>研究開発アウトライナー</h1>
      <button type='button' onClick={handleModalOpen}>列の表示切り替え</button>
      <button type='button'>ソート</button>
      <button type='button'>手動並び替え</button>
      <button type='button'>新しい行の追加</button>
      <table>
        <tr>
          <th>期</th>
          <th>テーマ名</th>
          <th>サブテーマ名</th>
          <th>テーマコード</th>
          <th>担当者</th>
          <th>管理者</th>
          <th>中期計画書</th>
          <th>年間計画書</th>
          <th>リソース表</th>
          <th>進捗</th>
          <th>スケジュール</th>
          <th>報告会議資料</th>
          <th>議事録</th>
          <th>動画</th>
          <th>文字起こしデータ</th>
          <th>週報</th>
          <th>研究報告書</th>
          <th>試験依頼書</th>
          <th>生データ</th>
          <th>サンプル履歴</th>
          <th>参考文献</th>
          <th>研究費</th>
          <th>特許</th>
        </tr>
        <tr>
          <td>2019.1Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2019.2Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2019.3Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2019.4Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2020.1Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2020.2Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2020.3Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2020.4Q</td>
          <td>テーマ1</td>
          <td>サブテーマ1</td>
          <td>ABC</td>
          <td>Aさん</td>
          <td>C総括</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={customStyles}
      >
        <button type='button' onClick={handleModalClose}>✕</button>
        <h2>列の表示切り替え</h2>
        <div>
          <div>表示</div>
          <div>
            <input type="checkbox"/>期
            <input type="checkbox"/>テーマ名
            <input type="checkbox"/>サブテーマ名
            <input type="checkbox"/>・・・
          </div>
        </div>
        <div>
          <button type='button'>→</button>
          <button type='button'>←</button>
        </div>
        <div>
        <div>非表示</div>
          <div>
            <input type="checkbox"/>特許
            <input type="checkbox"/>・・・
          </div>
        </div>
        <button type='button'>OK</button>
        <button type='button' onClick={handleModalClose}>キャンセル</button>
      </Modal>
    </div>
  );
}

export default App;
