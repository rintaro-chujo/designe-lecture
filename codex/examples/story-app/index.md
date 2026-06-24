---
layout: default
title: "事例: インスタのストーリー風アプリ"
lead: "写真や短いテキストを、縦長カードで次々に見せるWebサービスを作ります。"
prev_url: "/codex/examples/personal-site/"
next_url: "/codex/examples/today-photo/"
---

## この事例で作るもの

本物のInstagramを再現するものではありません。ログイン、公開投稿、外部APIは最初は使わず、ストーリーのような見せ方を小さく作ります。

<div class="toolbar">
  <a class="button-link secondary" href="{{ '/codex/workflow/' | relative_url }}">共通フローを見る</a>
</div>

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-story"><code>作りたいもの:
インスタのストーリー風に、写真や短いテキストを縦長カードで見せる小さなWebサービス

アプローチしたい課題:
日常の小さな出来事や気分は、普通の文章にすると重くなる。でも、短いカードなら気軽に残せる。

解決策のアイデア:
スマートフォンのストーリーのような縦長画面で、短いテキスト、背景色、スタンプ風ラベルを切り替えて見せる。

このシステムの目的:
今日の気分や出来事を、軽い記録として見返せるようにする。

具体的な動き:

- スマホ画面のような縦長プレビュー
- ストーリーのサンプルを3つ表示する
- 背景色、短いテキスト、スタンプ風ラベルを変えられる
- 次へ/前へボタンでストーリーを切り替えられる
- 自分で新しいストーリーを1つ追加できる入力欄
- 24時間で消える風の「残り時間」表示

最初は作らなくてよいもの:

- 本物のInstagram連携
- ログイン
- 外部API
- 他の人への公開投稿

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-story">コピー</button>

</div>

## 改変ポイント

- テーマを「今日の気分」「推し活記録」「ひとり旅」「ごはんログ」「サウンドスケープ」に変える
- 写真アップロードを追加する
- ストーリーに音、場所メモ、気分タグを付ける
- 画面をもっとスマホアプリらしくする

## 追加依頼

<div class="code-copy">
  <pre id="prompt-story-plus"><code>ストーリーの見た目をもっとスマートフォンで見ている感じにしてください。
上に進捗バーを付けて、次へ/前へボタンを画面下に置いてください。
さらに、新しいストーリーを追加すると、プレビューにすぐ反映されるようにしてください。</code></pre>
  <button class="small" data-copy-target="#prompt-story-plus">コピー</button>
</div>

## 次にやってみること

- Vercelにデプロイして、スマートフォンから見られるようにする
- サインインを追加して、自分のストーリーを保存できるようにする
- 他の人のストーリーも見られるフィードを作る
- 画像アップロードやスマホカメラ撮影を追加する
- いいね、リアクション、コメントを追加する
- 投稿時刻から、24時間で消える表示に近づける

<div class="callout" markdown="1">
  画像を本番で使う場合は、Computer Use + 編集で自分で作るか、編集して差し替えます。練習中は仮画像で構いません。
</div>

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/today-photo/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
