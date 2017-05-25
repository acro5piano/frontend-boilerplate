# Corporate site

かっこいいサイトを作ろう。

# 参考

Asana まじかっこいい

- https://asana.com/jobs/


# アーキテクチャ

## サーバーレス概要

- S3にHTML、CSS、Javascriptを配置し、S3のbucketを公開する
- JavascriptからGatewayAPIにデータ送信
- GatewayAPIからLambdaを呼び出す
- LambdaからSlackに投稿


注意点

- Lambda関数をいじる手順は下記でお願いします。直接AWSの画面からいじるとデグレしちゃうので。
  - 本リポジトリの`lambda`ディレクトリに入る
  - `index.js`などを編集する
  - `bash deploy.sh` を実行する

## フロントエンド環境

- ビルドツールは`webpack`
- テンプレート言語は`Pug`
- スタイルのメタ言語は`PostCSS`
- CSSフレームワークは`Skeleton`
- `postcss-simple-vars`で変数管理できるように
- JSは`es2015`で書く
- JSフレームワークは`Vue.js`
- アニメーションは`SVG.js`
- Ajax通信は`axios`

## 設定覚書

- S3の設定は https://circleci.com/gh/Traimmu/www.traimmu.com/edit#aws から行うこと

## 参考サイト

- http://qiita.com/toguma/items/a3c833e42c2469142ca4
- https://blog.feedtailor.jp/2016/01/10/15534/
- https://syon.github.io/refills/rid/1481295/

