---
title: 【PS5】ASTRO HDMIアダプターでMixAmpを使う方法【解説】
description: 今回はPS5とPS4とでのMixAmpの接続方法の違い（光デジタル端子の有無について）と、PS5にMixAmpをHDMIアダプターを使って接続する方法について紹介します。
date: 2021-08-19
lastmod: 2023-11-03
categories: 
  - 雑記
tags: 
  - ゲーム
  - 商品レビュー
  - MixAmp
archives: 
  - 2021/08
thumbnail: /images/game.png
# draft: false
---

今回はPS5とPS4とでの**MixAmpの接続方法の違い**（光デジタル端子の有無について）と、PS5に**MixAmpをHDMIアダプターを使って接続する方法**について紹介します。

{{< box "関連記事" >}}
<ul>
<li>{{< ref "/game-mixamp-apex-equalizer" >}}</li>
<li>{{< ref "/game-ps5-apex" >}}</li>
</ul>
{{< /box >}}

## PS5には光デジタル端子が無い

**MixAmp**はFPS等の音声が重要であるゲームに威力を発揮するデバイスです。また、MixAmpは**光デジタル端子**を使うことでフルに性能を発揮します。光デジタルケーブルは信号を送信する際のノイズ・劣化が少ないので音質に優れるという特徴があるからです。MixAmpを光デジタル端子を使うメリットとして以下の利点があります。

{{< box "光デジタル端子を使うメリット" >}}
<ul>
<li>ミキシング機能でゲーム音とVC音の音のバランス調整ができる</li>
<li>イコライザーが使用できる</li>
<li>Dolbyサラウンドに対応している</li>
</ul>
{{< /box >}}

MixAmpは光デジタル端子を使わないと性能を発揮できません。しかし、PS5には光デジタル端子がありません。つまり、残念ながら**PS5にはそのままMixAmpは接続できない**ということです。一応USBだけで直刺し接続はできますが、ゲーム音とVC音を個別に調整出来ませんし、音質も悪くなってしまいます。

{{< rawhtml >}}
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script>mermaid.initialize({startOnLoad: true});</script>
  <figure>
    <div class="mermaid">
    graph LR
      PS5 ---|HDMI| モニター
      PS5 ---|USB| MixAmp
      MixAmp ---|3.5mm| ヘッドセット
    </div>
    <figcaption>
      <p>PS5とMixAmpをそのまま繋げる場合の配線</p>
    </figcaption>
  </figure>
{{< /rawhtml >}}

僕自身、PS5でUSB接続でMixAmpを使ってみましたが、PS4で光デジタルケーブルを使ってプレイした時より音の聞こえ加減が悪いので、音質面での違和感が凄い。また、ゲーム音とVC音の個別の調整もできません。どのようにしたら使えるのか…。ちゃんと使えるようにするには、光デジタルをアダプターでHDMI接続に変換する必要があります。

どのように接続するかというと、「[ASTRO Gaming アストロ HDMI アダプター](https://amzn.to/3DflvWO)」と呼ばれる機器を使います。これ一つでMixAmpとPS5を接続できます。

{{< amazon_link title="ロジクールG ASTRO Gaming HDMI アダプター" asin="B08LP8HRZQ" url="https://amzn.to/3DflvWO">}}

流石にMixAmpが使えないのはストレスなので、僕もHDMIアダプターを買ってみることにしました。

## HDMIアダプターを買って繋げてみた

HDMIアダプターの外観はこんな感じです。

{{< luminous src="/images/game-ps5-mixamp-hdmiadapter-01.jpg" alt="HDMIアダプターの外観" caption="HDMIアダプターの外観">}}

HDMIアダプターは結構小さいです。MixAmpの半分もありません。本体に付属する配線はHDMIケーブル・電源用USBケーブルの2本です。

### HDMIアダプターを繋げる

実際に、PS5とMixAmpにHDMIアダプターを接続してみましょう。配線を分かりやすく図にするとこんな感じです。

{{< rawhtml >}}
  <figure>
    <div class="mermaid">
    graph LR
      PS5 ---|HDMI| HDMIアダプター
      HDMIアダプター ---|HDMI| モニター
      HDMIアダプター ---|光デジタルケーブル<br>ゲーム音声用| MixAmp
      PS5 ---|USB<br>VC音声用| MixAmp
      MixAmp ---|3.5mm| ヘッドセット
    </div>
    <figcaption>
      <p>PS5とMixAmpをHDMIアダプターで繋げる場合の配線</p>
    </figcaption>
  </figure>
{{< /rawhtml >}}

HDMIアダプターに**PS5からのHDMIケーブル**と**MixAmpからのHDMIケーブル**を接続して、アダプターとモニターをHDMIケーブルで結ぶ感じです。

そこまで複雑な配線では無いですね。自分もすぐ接続できました。しかし線が多くなり、適当に繋げると絡まってごちゃごちゃしやすいので注意。

ちゃんと聞こえるようになったか少し不安でしたが、元通りに聞こえるようになりました。これでFPSでもしっかり足音聞こえるので安心です！

### PS5本体の設定＆外部スピーカーへの出力

PS5本体の設定は以下の箇所を確認すればOKです。

{{< box "PS5本体の設定" >}}
<ul>
<li>「サウンド」→「マイク」→「入力機器」→「USBヘッドセット（Astro MixAmp Pro）」</li>
<li>「サウンド」→「音声出力」→「出力機器」→「USBヘッドセット（Astro MixAmp Pro）」</li>
<li>「サウンド」→「音声出力」→「ヘッドフォンへの出力」→「チャット音声」</li>
</ul>
{{< /box >}}

また、3.5mm端子対応の外部スピーカーを繋げてそこへ音声を出力したい場合は、MixAmpにある**stream端子**に3.5mm端子を差し込めば出力されるようになります。

* * *

今回はHDMIアダプターでMixAmpとPS5を接続してみました。PS5でもアンプがちゃんと使えて超便利でした！数少ない欠点としては配線が複雑になりやすい所でしょうか。

HDMIアダプターの価格はそれほど高くないので、PS5とMixAmpを持っている人はぜひ購入を検討ください。

以上で記事を終わりにします。