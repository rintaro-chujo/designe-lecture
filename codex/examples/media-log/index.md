---
layout: default
title: "事例: 読書・動画ログ"
lead: "読んだ本、見た動画、聞いたPodcastをカードで記録します。"
prev_url: "/codex/examples/expense-memo/"
next_url: "/codex/examples/interview-chat/"
---

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-media-log"><code>作りたいもの:
読んだ本や見た動画を記録する小さなログアプリ

アプローチしたい課題:
本、記事、動画、Podcastを見ても、あとで何がよかったのか忘れてしまう。

解決策のアイデア:
タイトル、種類、一言メモ、もう一度見たい度をカードで残せるようにする。

このシステムの目的:
自分の関心の記録をためて、あとで見返したり人にすすめたりしやすくする。

具体的な動き:

- 見たもの、読んだものを入力できる
- 入力した内容がカードで並ぶ
- 種類ごとに見分けられる
- もう一度見たい度が分かる

入力したい項目:

- タイトル
- 種類: 本、記事、動画、Podcast
- 一言メモ
- もう一度見たい度

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-media-log">コピー</button>

</div>

## 改変ポイント

- 「推し活ログ」「ゼミ資料ログ」「映画ログ」「Podcastログ」に変える
- 星評価やタグを追加する
- もう一度見たいものだけ表示できるようにする
- URL欄を追加し、あとで開けるようにする

## 追加依頼

<div class="code-copy">
  <pre id="prompt-media-log-plus"><code>ログにタグを追加してください。
さらに、タグや種類で絞り込めるようにしてください。
カードには、もう一度見たい度が分かる表示を入れてください。</code></pre>
  <button class="small" data-copy-target="#prompt-media-log-plus">コピー</button>
</div>

## 次にやってみること

- URLを貼ると、タイトルやメモをカード状に見せる
- 自分だけのZINEやおすすめリストとして公開する
- 友達に共有できるURLを作る
- 保存機能を追加して、翌日もログが残るようにする
- 感想がたまったら、傾向を分析する画面を作る

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/interview-chat/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
