---
layout: default
title: "仕組みを知る"
lead: "手を動かす前に、「何のために」「何をするのか」を図で理解しておきます。"
---

## 今までの状態

これまで、皆さんは自分のパソコンの中に **Codex** というアプリを入れて、Codex がプロトタイプを作ってくれていました。

ただし、ここで作ったプロトタイプの **データは、あなたのパソコンの中だけ** にあります。だから、あなたの持っている別のスマートフォンや、他の人のパソコンからアクセスしようとしても、開くことができません。

<figure class="shot">
  <img src="{{ '/20260624/media/mechanism-1.jpg' | relative_url }}" alt="自分のPCの中のCodexがプロトタイプを作っている図">
  <figcaption>Codex が作ったプロトタイプは、いまは自分のPCの中だけにあります。</figcaption>
</figure>

## これからやること

そこで、作ったプロトタイプを **インターネットのクラウド上にアップロード** します。さらに、そこに **URL（`https://` から始まる住所）** を1つくっつけます。

こうすると、他の人のスマートフォンや、他の人のパソコンからでも、そのURLにアクセスするだけで、あなたが作ったプロトタイプを開けるようになります。

<figure class="shot">
  <img src="{{ '/20260624/media/mechanism-2.jpg' | relative_url }}" alt="プロトタイプをクラウドにアップロードしてURLを発行する図">
  <figcaption>クラウドにアップロードして、URLを発行する。これが今回のゴールです。</figcaption>
</figure>

## ここで使うのが「GitHub」

このアップロードとURL発行をしてくれるのが、今回はじめて使う **GitHub（ギットハブ）** というサービスです。

かんたんに言うと、GitHub は次の2つをしてくれます。

1. **プロトタイプを入れておく、オンライン上の「箱」になってくれる**
2. その箱に対して **URLを発行** して、どの端末からでもアクセスできるようにしてくれる

<figure class="shot">
  <img src="{{ '/20260624/media/mechanism-3.jpg' | relative_url }}" alt="GitHubを使って、自分のPC・スマホ・他の人のPCからアクセスできるようにする全体図">
  <figcaption>GitHub にアップロードしてURLを発行すれば、自分のスマホからも、他の人からもアクセスできます。</figcaption>
</figure>

<div class="callout" markdown="1">
  むずかしい言葉が出てきても大丈夫です。意味は次の表のとおりですが、いまは「**作ったものをGitHubにアップロードして、URLをもらう**」と覚えておけば十分です。
</div>

## 出てくる言葉

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>言葉</th>
        <th>意味</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GitHub（ギットハブ）</td>
        <td>作ったものをオンラインに置いて、公開できるサービス。今回使います。</td>
      </tr>
      <tr>
        <td>リポジトリ</td>
        <td>GitHubの中に作る、プロトタイプを入れるための「箱」。</td>
      </tr>
      <tr>
        <td>GitHub Pages</td>
        <td>リポジトリの中身を、URL付きのWebページとして公開してくれる仕組み。</td>
      </tr>
      <tr>
        <td>URL</td>
        <td>ブラウザに貼る住所。例: <code>https://～</code>。これを共有すれば誰でも開けます。</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="toolbar">
  <a class="button-link" href="{{ '/20260624/github-account/' | relative_url }}">次へ：GitHubアカウントを作る</a>
</div>
