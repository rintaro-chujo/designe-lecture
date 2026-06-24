---
layout: default
title: "実際にサービスを一つ作ってみる"
lead: "作れるもの一つごとに個別URLを用意しています。好きな事例を選んで、サービスを一つ作ってみましょう。"
---

## 先に確認すること

どの事例でも、まずCodexでプロジェクトを作ってから始めます。まだプロジェクトを作っていない人は、先に共通フローを見てください。

<div class="toolbar">
  <a class="button-link" href="{{ '/codex/workflow/' | relative_url }}">共通フローを見る</a>
  <a class="button-link secondary" href="{{ '/codex/what-is-codex/' | relative_url }}">Codexとは</a>
</div>

{% assign reference_links = site.data.reference_links.links %}
{% if reference_links and reference_links.size > 0 %}

## 参考URL

教員が用意したツイートやWebページです。気になるものがあれば、URLをプロンプトに貼って「このURLの内容を下敷きにしてください」と依頼できます。

<div class="card-grid">
  {% for item in reference_links %}
    <article class="card">
      <h3>{{ item.title }}</h3>
      {% if item.note %}<p>{{ item.note }}</p>{% endif %}
      <a class="button-link secondary" href="{{ item.url }}" target="_blank" rel="noopener">URLを開く</a>
    </article>
  {% endfor %}
</div>
{% endif %}

## 事例一覧

<div class="card-grid">
  
  <article class="card">
    <h3>インスタのストーリー風</h3>
    <p>縦長カード、次へ/前へ、24時間で消える風の表示を作ります。</p>
    <a class="button-link" href="{{ '/codex/examples/story-app/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>BeReal風: 今日の一枚</h3>
    <p>2分タイマーと今日の一枚カードを作ります。</p>
    <a class="button-link" href="{{ '/codex/examples/today-photo/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>相性診断風</h3>
    <p>質問に答えるとタイプと相性コメントが出る診断を作ります。</p>
    <a class="button-link" href="{{ '/codex/examples/personality-match/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>マーケティング用語クイズ</h3>
    <p>選択肢を押すと正解と説明が出るクイズです。</p>
    <a class="button-link" href="{{ '/codex/examples/marketing-quiz/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>支出メモ</h3>
    <p>金額、カテゴリ、メモを入力して一覧化します。</p>
    <a class="button-link" href="{{ '/codex/examples/expense-memo/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>読書・動画ログ</h3>
    <p>見たもの、読んだもの、また見たいものを記録します。</p>
    <a class="button-link" href="{{ '/codex/examples/media-log/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>面接練習チャット風</h3>
    <p>質問に答えて、あとで回答を振り返る練習アプリです。</p>
    <a class="button-link" href="{{ '/codex/examples/interview-chat/' | relative_url }}">開く</a>
  </article>
  <article class="card">
    <h3>自分を表すWebサイト</h3>
    <p>自分の関心、問い、雰囲気を1ページにまとめます。</p>
    <a class="button-link" href="{{ '/codex/examples/personal-site/' | relative_url }}">開く</a>
  </article>
  <!-- <article class="card">
    <h3>旅行予算メモ</h3>
    <p>交通費、宿泊費、食費などを入れて合計を出します。</p>
    <a class="button-link" href="{{ '/codex/examples/travel-budget/' | relative_url }}">開く</a>
  </article> -->
  <article class="card">
    <h3>授業メモ整理</h3>
    <p>分かったこととまだ分からないことを整理します。</p>
    <a class="button-link" href="{{ '/codex/examples/class-note/' | relative_url }}">開く</a>
  </article>
</div>
