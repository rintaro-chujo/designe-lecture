---
layout: default
title: "事例: BeReal風 今日の一枚"
lead: "2分以内に今日の一枚を記録する体験を、小さなWebサービスとして作ります。"
prev_url: "/codex/examples/story-app/"
next_url: "/codex/examples/personality-match/"
---

## この事例で作るもの

本物のBeRealを再現するものではありません。通知、友達機能、同時カメラ撮影は最初は作らず、「時間制限のある記録体験」を作ります。

<div class="toolbar">
  <a class="button-link secondary" href="{{ '/codex/workflow/' | relative_url }}">共通フローを見る</a>
</div>

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-today-photo"><code>作りたいもの:
BeReal風に、今日の一枚を2分以内に記録する小さなWebサービス

アプローチしたい課題:
毎日の記録は、きれいに残そうとすると面倒になって続かない。短い制限時間があると、完璧にしようとせずその場の空気を残しやすい。

解決策のアイデア:
「今日の一枚」ボタンを押すとタイマーが始まり、写真と一言メモを急いで残す体験にする。

このシステムの目的:
日常の一瞬を、作り込みすぎない記録として残す。

具体的な動き:

- 「今日の一枚を撮る」ボタン
- ボタンを押すと2分タイマーが始まる
- 写真はまず仮画像か、画像アップロードでよい
- 一言メモを書ける
- 投稿すると、今日の一枚カードとして画面に表示される
- サンプル投稿を2つくらい最初から表示する

最初は作らなくてよいもの:

- 本物の通知
- ログイン
- 友達機能
- 外部API
- 同時カメラ撮影

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-today-photo">コピー</button>

</div>

## 改変ポイント

- テーマを「今日の学び」「今日のごはん」「今日の作業場所」「今日の推し活」に変える
- 2分タイマーを30秒、5分などに変える
- 投稿カードに気分、場所、タグを追加する
- 発展として、PCやスマートフォンのカメラ撮影を追加する

## 追加依頼

<div class="code-copy">
  <pre id="prompt-today-photo-plus"><code>今日の一枚カードに、気分タグと場所メモを追加してください。
さらに、タイマーが0秒になったら「遅刻投稿」と分かる表示を出してください。
本物の通知やログインはまだ使わないでください。</code></pre>
  <button class="small" data-copy-target="#prompt-today-photo-plus">コピー</button>
</div>

## 次にやってみること

- Vercelにデプロイして、スマートフォンから使えるようにする
- スマートフォンのカメラで実際に撮影できるようにする
- サインインを追加し、自分の投稿履歴を保存できるようにする
- 友達の投稿も見られるフィードを作る
- 写真フィード、いいね、コメントを追加する

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/personality-match/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
