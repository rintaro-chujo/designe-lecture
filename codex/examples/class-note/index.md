---
layout: default
title: "事例: 授業メモ整理"
lead: "分かったこと、まだ分からないこと、次に聞きたいことを整理します。"
prev_url: "/codex/examples/travel-budget/"
next_url: "/codex/submission/"
---

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-class-note"><code>作りたいもの:
授業メモを整理する小さなWebサービス

アプローチしたい課題:
授業中にメモを書いても、あとで見返すと「何が分かって、何が分からないのか」が混ざってしまう。

解決策のアイデア:
分かったこと、まだ分からないこと、次に質問したいことを分けて入力し、カードで見返せるようにする。

このシステムの目的:
授業後に、自分が次に何を確認すればよいか分かるようにする。

具体的な動き:

- 今日のテーマを入力できる
- 分かったことを書ける
- まだ分からないことを書ける
- 次に質問したいことを書ける
- 入力した内容が、見返しやすいカードとして並ぶ

入力したい項目:

- 今日のテーマ
- 分かったこと
- まだ分からないこと
- 次に質問したいこと

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-class-note">コピー</button>

</div>

## 改変ポイント

- ゼミ発表、読書会、就活説明会、アルバイト研修向けに変える
- 「重要度」「締切」「担当者」などを追加する
- 分からないことだけを一覧表示する
- 質問文をきれいに書き直す欄を作る

## 追加依頼

<div class="code-copy">
  <pre id="prompt-class-note-plus"><code>まだ分からないことだけを一覧で見られる画面を追加してください。
さらに、次に質問するときの聞き方を、短い文章に整える欄を作ってください。</code></pre>
  <button class="small" data-copy-target="#prompt-class-note-plus">コピー</button>
</div>

## 次にやってみること

- 授業ごと、ゼミごとにメモを分類する
- 保存機能を追加して、前回のメモを見返せるようにする
- 質問リストをエクスポートする
- 発表準備や卒論メモの管理に作り替える
- AIに要約や質問案を作ってもらう機能を追加する

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/submission/' | relative_url }}">提出前チェックへ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
