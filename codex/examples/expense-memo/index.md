---
layout: default
title: "事例: 支出メモ"
lead: "日付、金額、カテゴリ、メモを入力して、支出を一覧化します。"
prev_url: "/codex/examples/marketing-quiz/"
next_url: "/codex/examples/media-log/"
---

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-expense"><code>作りたいもの:
日々の支出を簡単に記録できる小さなメモアプリ

アプローチしたい課題:
何にお金を使ったかを後から思い出せず、支出の傾向が分からない。

解決策のアイデア:
金額、カテゴリ、メモを短時間で入力し、一覧と合計をすぐ見られるようにする。

このシステムの目的:
細かい家計簿ではなく、自分のお金の使い方をざっくり把握する。

具体的な動き:

- 支出を入力できる
- 入力した内容が一覧で見える
- 合計金額が見える
- カテゴリ別に支出を見られる

入力したい項目:

- 日付
- 金額
- カテゴリ
- メモ

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-expense">コピー</button>

</div>

## 改変ポイント

- カテゴリを食費、交通費、カフェ、サブスク、服にする
- 合計金額を表示する
- カテゴリ別の合計を出す
- 入力例を最初から入れておく

## 追加依頼

<div class="code-copy">
  <pre id="prompt-expense-plus"><code>カテゴリ別の合計金額が分かるようにしてください。
さらに、一番お金を使っているカテゴリを目立たせてください。
入力した支出を削除できるボタンも追加してください。</code></pre>
  <button class="small" data-copy-target="#prompt-expense-plus">コピー</button>
</div>

## 次にやってみること

- 入力した支出を保存して、翌日も残るようにする
- カテゴリ別の円グラフや棒グラフを追加する
- CSVとしてダウンロードできるようにする
- スマートフォンから毎日入力しやすい画面にする
- 予算を設定し、使いすぎたら警告を出す

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/media-log/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
