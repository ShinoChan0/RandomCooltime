import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("豪華客船強盗 yachtheist\n飛行機強盗 carheist\nアーティファクト強盗 artifactheist\nオイルリグ強盗 oilrigheist\nユニオン銀行強盗 unionheist\n美術館強盗 artgalleryheist\n金庫強盗 vaultheist\n飛行機墜落強盗 skyheist")
  const [shuffledText, setShuffledText] = useState("")

  const shuffleLines = () => {
    const lines = inputText.split("\n")
    const shuffled = [...lines].sort(() => Math.random() - 0.5)
    setShuffledText(shuffled.join("\n"))
  }

  return (
    <div className="my-4 mx-8">
      <h1 className="text-5xl font-bold mb-4">強盗の順番並び替えアプリ</h1>
      <div className="flex my-4">
        <div className="text-right py-2 pr-2 text-lg font-bold border-y-2 border-y-white">
          15<br />
          45<br />
          75<br />
          95<br />
          115<br />
          135<br />
          155<br />
        </div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="ここにテキストを入力してください（改行ごとに処理されます）"
          rows="5"
          className="w-full border-2 text-lg border-gray-300 rounded-lg p-2"
        />
      </div>
      <button
        onClick={shuffleLines}
        className="px-6 py-2 bg-green-500 text-white rounded-md"
      >
        ランダムに並び替える
      </button>
      <h2 className="text-4xl font-bold mt-4">結果</h2>
      <div className="flex my-4">
        <div className="text-right py-2 pr-2 text-lg font-bold border-y-2 border-y-white">
          15<br />
          45<br />
          75<br />
          95<br />
          115<br />
          135<br />
          155<br />
        </div>
        <textarea
          value={shuffledText}
          readOnly
          rows="5"
          className="w-full border-2 text-lg border-gray-300 rounded-lg p-2"
        />
      </div>
    </div>
  )
}

export default App;
