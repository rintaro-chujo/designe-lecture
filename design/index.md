---
layout: default
title: "A3横の審査ボードを作る"
lead: "グッドデザイン・ニューホープ賞に提出するポスターを、ChatGPTで初稿化し、Canvaで批判的に作り直します。"
section_base: "/design"
---

## 今日のゴール

グッドデザイン・ニューホープ賞に提出する **A3横長の審査ボード** を1枚作ります。

最初からCanvaで白紙に向かうのではなく、まずChatGPTでポスター画像の初稿を作ります。そのあと、出てきたものをそのまま使わず、「何が伝わっていないか」「どこが雑か」「どこを削るべきか」を自分で見つけて、Canvaで作り直します。

<div class="callout" markdown="1">
  今回大事なのは、AIにきれいなものを作らせることではありません。AIが出した初稿を見て、批判的に直すべき場所を見つけ、自分の判断で審査資料に仕上げることです。
</div>

## <span class="step-badge">1</span> まず2022年の受賞ページを見る

作業に入る前に、最初の年の受賞ページを見ます。2022年はA2タテの資料ですが、ポスターの雰囲気、見出しの強さ、作品概要の短さ、審査資料として入れるべき情報の判断は参考になります。

<div class="toolbar">
  <a class="button-link" href="https://newhope.g-mark.org/award2022.html" target="_blank" rel="noopener">2022年の受賞ページを開く</a>
  <a class="button-link secondary" href="https://newhope.g-mark.org/award/2022/22NHA030012.html" target="_blank" rel="noopener">LearnWiz Oneの掲載ページ</a>
</div>

見るポイントは次の5つです。

1. 作品名が最初に目に入るか
2. 作品画像と説明文の役割が分かれているか
3. 「何を作ったか」だけでなく「なぜ必要か」が伝わるか
4. 審査員が短時間で意味を取れる文章量か
5. A3横にするとき、どの情報を削るべきか

## <span class="step-badge">2</span> ChatGPTで初稿を作る

ここからは **ChatGPT** を使います。Codexではありません。ChatGPTに作品説明文と条件を貼り、A3横の完成ポスター画像を1枚生成してもらいます。

<figure class="shot">
  <img src="{{ '/design/media/step-01-start.jpg' | relative_url }}" alt="Canvaのデザイン一覧画面">
  <figcaption>最初は完成形を決め切らず、A3横の審査ボードを作る前提で素材と構成を準備します。</figcaption>
</figure>

下のプロンプトをChatGPTに貼り、最後に作品説明文を追加してください。作品説明文は長くても構いませんが、ChatGPTには「全部載せる」のではなく「意味を編集する」ように頼みます。

<p class="spell">ChatGPTに貼るプロンプト</p>

<div class="code-copy">
  <pre id="design-prompt"><code>あなたは、デザイン賞・卒業制作展・研究展示の審査ボードを数多く制作してきた、経験豊富なデザイン学生です。

以下に貼り付ける作品説明文を読み取り、その内容をもとに、A3横長の完成ポスター画像を1枚生成してください。
これは、グッドデザイン賞やプロダクトデザイン専攻の卒業制作展の審査資料として提出する、1枚の横長プレゼンボード風ポスター画像です。

説明文をそのまま長文で配置するのではなく、内容を理解した上で、ポスターとして読みやすい見出し・短い本文・図解・使用シーン・注釈に再構成してください。

目的:
- なぜこの作品が必要なのか
- 使う人の体験がどう変わるのか
- このプロダクトが何をするものか

画面に入れる主な要素:
1. タイトル・コンセプト領域
2. ヒーローイメージ
3. 体験フロー
4. 必要最小限の補足情報

条件:
- A3横長、比率は約1.414:1
- 外周に均一な余白を取る
- 全体の30%程度を余白として残す
- 本文は16pt以上で読める大きさ
- 基本はゴシック体
- 淡いオレンジ色をプライムカラーにする
- 文章、表、アイコンを詰め込みすぎない
- SDGsロゴは不要
- 体験フローや情報ブロックの本文行数を揃える

ここから作品説明文:
（ここに作品説明文を貼る）</code></pre>
  <button class="small" data-copy-target="#design-prompt">コピー</button>
</div>

<figure class="shot">
  <img src="{{ '/design/media/step-02-ai-draft.jpg' | relative_url }}" alt="ChatGPTの初稿をCanva上で開いた画面">
  <figcaption>初稿が出たら、いきなり仕上げようとせず、まず全体の構成だけを見ます。</figcaption>
</figure>

## <span class="step-badge">3</span> 生成物に赤入れする

ChatGPTが出した画像は、完成品ではありません。ここから自分で赤入れします。

赤入れでは、見た目の好みより先に「審査員に伝わるか」を見ます。次の観点で、直す場所を探してください。

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>見る場所</th>
        <th>確認すること</th>
        <th>直し方</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>タイトル</td>
        <td>作品名だけでなく、価値が伝わるか</td>
        <td>「何を変える道具か」が分かる短い言葉にする</td>
      </tr>
      <tr>
        <td>ヒーロー画像</td>
        <td>ただの画面紹介になっていないか</td>
        <td>授業中の体験や変化が見える構図にする</td>
      </tr>
      <tr>
        <td>課題</td>
        <td>オンライン授業で発言しにくい状況が伝わるか</td>
        <td>長い背景説明を短い課題文に削る</td>
      </tr>
      <tr>
        <td>体験フロー</td>
        <td>THINK / GRASP / SHARE の流れが読めるか</td>
        <td>3項目の行数、幅、高さを揃える</td>
      </tr>
      <tr>
        <td>余白</td>
        <td>情報が詰まりすぎていないか</td>
        <td>説明文、支援事業名、アイコンを減らす</td>
      </tr>
      <tr>
        <td>信頼性</td>
        <td>改善してきたプロセスが伝わるか</td>
        <td>3日プロトタイプ、週1改善、社会実装を短く添える</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="shot">
  <img src="{{ '/design/media/step-03-edit-text.jpg' | relative_url }}" alt="Canvaでポスター内の文字を編集している画面">
  <figcaption>AIが作った文字はそのまま使わず、日本語として読める短い見出しに置き換えます。</figcaption>
</figure>

## <span class="step-badge">4</span> CanvaでA3横に作り直す

Canvaでは、ChatGPTの画像を下敷きにして、実際に提出できる形に作り直します。

最初にやること:

1. サイズをA3横にする
2. 外周に均一な余白を取る
3. タイトル、ヒーロー画像、体験フロー、補足情報の4領域だけに絞る
4. 本文をすべて読める日本語に置き換える
5. 画像生成AIの読めない文字や意味不明な図を消す

<figure class="shot">
  <img src="{{ '/design/media/step-04-restructure.jpg' | relative_url }}" alt="Canvaでポスターの構成を組み替えている画面">
  <figcaption>配置はAIの初稿に引っ張られすぎず、審査員の視線が自然に流れる順番に組み直します。</figcaption>
</figure>

## <span class="step-badge">5</span> 入れる情報を絞る

A3横に入れる情報は、次の4つに絞ります。

1. **何をするものか**  
   LearnWiz Oneは、授業中の意見交換を支援するWebツール。

2. **なぜ必要か**  
   オンライン授業では、カメラやマイクがオフになり、学生が発言しにくい。

3. **体験がどう変わるか**  
   学生が自分の意見を書き、他者の意見を知り、共有しながら学べる。

4. **なぜ信頼できるか**  
   プロトタイプ、ワークショップ、フィードバックを通じて改善されている。

入れないもの:

- 作品説明文の長文コピー
- 支援制度や採択名の羅列
- 細かい比較表
- 多すぎるアイコン
- SDGsロゴ
- 読めない小さい文字

<figure class="shot">
  <img src="{{ '/design/media/step-05-assets.jpg' | relative_url }}" alt="Canvaで人物アイコンなどの素材を探している画面">
  <figcaption>素材を足すときも、にぎやかにするためではなく、体験や関係性を説明するために使います。</figcaption>
</figure>

## <span class="step-badge">6</span> 完成前にチェックする

最後に、Canva上で縮小表示して確認します。細部を見る前に、遠目で意味が伝わるかを見てください。

チェック項目:

1. 10秒で、何のためのプロダクトか分かる
2. タイトル、ヒーロー画像、体験フローの順に視線が流れる
3. 本文が16pt以上で読める
4. 淡いオレンジが視線誘導に使われている
5. 体験フローの各項目の行数が揃っている
6. AIっぽい曖昧な文字や意味不明な図が残っていない
7. 自分で削った跡、言い換えた跡、直した跡がある

<figure class="shot">
  <img src="{{ '/design/media/step-06-final-check.jpg' | relative_url }}" alt="Canvaでポスターを確認している画面">
  <figcaption>完成前は、細かい装飾よりも「一目で伝わるか」「余白が残っているか」を優先して確認します。</figcaption>
</figure>

## 最終提出の形

Canvaで完成したら、次の形式で書き出します。

1. 提出用: PDF
2. 確認用: PNGまたはJPG
3. 作業記録用: 赤入れ前のAI初稿、赤入れメモ、Canvaで直した完成版

完成形の目標は、AIが作ったポスターを整えることではありません。AIの初稿を批判的に読み替え、自分の判断で、審査資料として成立するA3横ポスターに作り直すことです。
