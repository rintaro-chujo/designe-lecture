---
layout: default
title: "事例: MBTI/相性診断風ジェネレーター"
lead: "質問に答えるとタイプと相性コメントが出る、診断風アプリを作ります。"
prev_url: "/codex/examples/today-photo/"
next_url: "/codex/examples/marketing-quiz/"
---

## この事例で作るもの

公式のMBTI診断ではなく、授業用の「タイプ診断風」「相性診断風」の練習として作ります。結果は娯楽として見せ、人を決めつける表現は避けます。

<div class="toolbar">
  <a class="button-link secondary" href="{{ '/codex/workflow/' | relative_url }}">共通フローを見る</a>
</div>

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-personality"><code>作りたいもの:
MBTIや相性診断のように、いくつかの質問に答えるとタイプと相性コメントが出る小さなWebサービス

アプローチしたい課題:
MBTI以外の自分だけの性格診断を作ってみたい。

解決策のアイデア:
軽い質問に答えると、タイプ名、相性コメント、次に試す行動が出る診断風アプリにする。

このシステムの目的:
自分や友達の違いを、決めつけではなく会話のきっかけとして楽しめるようにする。

具体的な動き:

- 質問は6問
- 各質問は2択か4択
- 回答すると、最後にタイプ名が表示される
- タイプごとに短い説明が出る
- 友達と比べるための「相性コメント」も表示する
- 結果画面はスクショしたくなる見た目にする

大事にしたいこと:

- 公式のMBTI診断ではなく、授業用の診断風アプリとして作る
- 人を決めつける表現や、強い断定は避ける
- 結果は娯楽として見せる

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-personality">コピー</button>

</div>

## 改変ポイント

- テーマを「ゼミでの役割タイプ」「旅行相性」「カフェ作業相性」「推し活タイプ」に変える
- タイプ名を自分で考えた名前に変える
- 質問数を増やす
- 結果画面をSNSで共有したくなる見た目にする

## 追加依頼

<div class="code-copy">
  <pre id="prompt-personality-plus"><code>診断結果の画面を、スクリーンショットで共有したくなるように整えてください。
タイプ名、短いキャッチコピー、相性のよいタイプ、次におすすめの行動を表示してください。
ただし、人を決めつける言い方は避けてください。</code></pre>
  <button class="small" data-copy-target="#prompt-personality-plus">コピー</button>
</div>

## 次にやってみること

- 自分が考えた相性診断に作り替える
- 2人分の結果を入力すると、相性コメントが出るようにする
- 結果画面を画像として保存し、DiscordやSNSに貼れるようにする
- 質問やタイプを管理画面から追加できるようにする
- 診断結果からおすすめの行動や場所を提案する

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/marketing-quiz/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
