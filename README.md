# my-homepage

個人ブログサイトです。

## 技術スタック

- HTML
- CSS
- JavaScript (バニラJS)

## ファイル構成

```
my-homepage/
├── index.html          # トップページ
├── css/
│   └── style.css       # スタイル
├── js/
│   └── main.js         # ダークモード、モバイルメニュー
└── posts/              # ブログ記事
```

## ローカルで確認

`index.html` をブラウザで開くだけで動作します。

## 新しい記事の追加方法

1. `posts/` に新しいHTMLファイルを作成（既存ファイルをコピーして編集）
2. `index.html` の記事一覧に追加
3. GitHubにプッシュ

## GitHub Pagesで公開

1. GitHubで Settings → Pages を開く
2. Source で「Deploy from a branch」を選択
3. Branch で「main」を選択して Save
4. `https://<username>.github.io/my-homepage/` で公開される