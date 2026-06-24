---
layout: default
title: "事例: 面接練習チャット風"
lead: "質問に答えて、あとで自分の回答を振り返る練習アプリを作ります。"
prev_url: "/codex/examples/media-log/"
next_url: "/codex/examples/travel-budget/"
---

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-interview"><code>作りたいもの:
就活面接の練習ができる、チャット風の小さなWebサービス

アプローチしたい課題:
面接の質問にいきなり答えようとすると、考えがまとまらず練習しにくい。

解決策のアイデア:
面接官から質問されているようなチャット画面で、1問ずつ回答を書き、最後に振り返れるようにする。

このシステムの目的:
完璧な回答を作る前に、自分の考えを言葉にする練習をしやすくする。

具体的な動き:

- 面接質問を5つ表示する
- 1問ずつ回答欄に入力する
- 入力した回答を最後に一覧で振り返る
- 「もっと具体的に書くとよさそう」などの簡単なアドバイスを表示する

最初は作らなくてよいもの:

- AIとの本格的な会話
- 外部API
- ログイン
- 回答の保存

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-interview">コピー</button>

</div>

## 改変ポイント

- 質問テーマを「ガクチカ」「自己PR」「ゼミ」「アルバイト」に変える
- 回答時間のタイマーを付ける
- 回答の長さや具体例の有無をチェックする
- チャット風、面接官風、メモ帳風など見た目を変える

## 追加依頼

<div class="code-copy">
  <pre id="prompt-interview-plus"><code>回答の振り返り画面を追加してください。
それぞれの回答について、文字数、具体例が入っているか、次に直すポイントを表示してください。
ただし、厳しすぎる言い方にはしないでください。</code></pre>
  <button class="small" data-copy-target="#prompt-interview-plus">コピー</button>
</div>

## 次にやってみること

- OpenAI APIなどを使って、本当に会話できる面接練習にする
- 回答を保存して、前回との差分を見られるようにする
- 音声入力や録音を追加する
- 企業別、職種別、ゼミ発表向けに質問を切り替える
- 友達と練習結果を共有できるようにする

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/travel-budget/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
