---
layout: default
title: "事例: マーケティング用語クイズ"
lead: "選択肢を押すと、正解と短い説明が出る復習アプリを作ります。"
prev_url: "/codex/examples/personality-match/"
next_url: "/codex/examples/expense-memo/"
---

## 元プロンプト

<div class="code-copy">
  <pre id="prompt-quiz"><code>作りたいもの:
マーケティング用語を復習できる小さなクイズアプリ

アプローチしたい課題:
授業で聞いた用語は、ノートを読み返すだけだと覚えたつもりになりやすい。

解決策のアイデア:
短い選択式クイズにして、答えた直後に正解と説明を見られるようにする。

このシステムの目的:
マーケティング用語を、テスト前だけでなく短い時間で確認できるようにする。

具体的な動き:

- まずは5問だけ出す
- 1問ずつ選択肢を表示する
- 選択肢を押すと、正解かどうかが分かる
- 正解・不正解に関係なく、短い説明が出る
- 最後に、何問正解したかが分かる

まずは、PC上で動く小さな形で作ってください。
作ったあとに、開き方と確認方法も手順で教えてください。</code></pre>
<button class="small" data-copy-target="#prompt-quiz">コピー</button>

</div>

## 改変ポイント

- テーマを会計、経営戦略、消費者行動、統計、英単語に変える
- 問題数を5問から10問に増やす
- 難易度を「入門向け」「期末試験向け」「ひっかけ多め」に変える
- 解説を、友達に説明するような言葉に変える

## 追加依頼

<div class="code-copy">
  <pre id="prompt-quiz-plus"><code>クイズに得点表示を追加してください。
最後に、正解数と一言コメントが出るようにしてください。
間違えた問題は、もう一度見直せるようにしてください。</code></pre>
  <button class="small" data-copy-target="#prompt-quiz-plus">コピー</button>
</div>

## 次にやってみること

- 自分の授業やゼミ用のクイズに作り替える
- 問題を自分で追加・編集できる画面を作る
- 難易度別に問題を出し分ける
- 間違えた問題だけ復習できるようにする
- 友達と得点を比べられるランキング風画面を作る

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/examples/expense-memo/' | relative_url }}">次の事例へ</a>
  <a class="button-link secondary" href="{{ '/codex/examples/' | relative_url }}">事例一覧へ戻る</a>
</div>
