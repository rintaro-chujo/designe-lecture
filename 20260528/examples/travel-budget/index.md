---
layout: default
title: "事例: 旅行予算メモ"
lead: "交通費、宿泊費、食費などを入力して、旅行予算をざっくり見積もります。"
prev_url: "/20260528/examples/interview-chat/"
next_url: "/20260528/examples/class-note/"
---

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-travel"><code>作りたいもの:
旅行の予算をざっくり計算できる小さなWebサービス

アプローチしたい課題:
旅行の話をしていると、楽しさが先に来て、実際にいくらかかるかが見えにくい。

解決策のアイデア:
交通費、宿泊費、食費などを入力すると、合計と1人あたりの金額がすぐ分かるようにする。

このシステムの目的:
旅行案を現実的に考えたり、友達と相談したりしやすくする。

具体的な動き:

- 行き先と人数を入力できる
- 費目ごとに金額を入力できる
- 合計金額が表示される
- 1人あたりの金額が表示される
- メモ欄に、気になることを書ける

入力したい項目:

- 行き先
- 人数
- 交通費
- 宿泊費
- 食費
- その他

まずは、PC上で動く小さな形で作ってください。</code></pre>
<button class="small" data-copy-target="#prompt-travel">コピー</button>

</div>

## 改変ポイント

- テーマを卒業旅行、日帰り旅行、推し活遠征、ひとり旅に変える
- 予算上限を入れて、超えたら警告を出す
- 複数案を比較できるようにする
- メモ欄や持ち物欄を追加する

## 追加依頼

<div class="code-copy">
  <pre id="prompt-travel-plus"><code>旅行案を2つ以上入力して比較できるようにしてください。
合計金額、1人あたりの金額、予算オーバーかどうかを見比べられる画面にしてください。</code></pre>
  <button class="small" data-copy-target="#prompt-travel-plus">コピー</button>
</div>

## 次にやってみること

- 旅行候補を複数保存して比較する
- 友達と割り勘しやすい表示を作る
- Google Mapsや外部サービスと組み合わせる案を考える
- スマートフォンで旅行中にも使える画面にする
- 持ち物リストや予定表を追加する

<div class="toolbar">
  <a class="button-link" href="{{ '/20260528/examples/class-note/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/20260528/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
