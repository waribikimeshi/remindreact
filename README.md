This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

ide
vscode

framework
react
next.js

rest
GET http://localhost:8080/v20241209/authentication/get/3

GET http://localhost:8080/v20241209/authentication/list

PATCH http://localhost:8080/v20241209/authentication/patch HTTP/1.1
content-type: application/json

{
"id": "13",
"mailAddress": "hogehoge@gmail.com",
"version": "16"
}

POST http://localhost:8080/v20241209/authentication/post HTTP/1.1
content-type: application/json

{
"mailAddress": "hihi@gmail.com",
"password": "{bcrypt}$2a$10$BooaIiRno2t5XKmsroWHG.HC9QqIa8Z4BUahMLaI8vRj3Oo4Tfyx.",
"role": "ROLE_PROVIDER_CONTRACT_2",
"expirationDate": "9999-12-31",
"lock": false,
"enabled": true,
"version": 8,
"createdUser": "anonymousUser",
"createDatetime": "2020-08-15T02:58:00.000+00:00",
"lastModifiedUser": "waribikimeshi@gmail.com",
"lastModifiedDatetime": "2021-01-25T03:39:44.000+00:00"
}

next.js メモ
app router ってのが最新になってる。
１ app 配下に URL と紐づくフォルダ作成
２ page.tsx ファイル作成
３ リンクは<a>じゃなく<Link>。ページ読み込みが動的なので速い。
４ layout.tsx に<body>が書かれている。<html lang="ja">書ききれないので TODO 打つ。<HEAD>は MetaData で設定する。
５ public は画像など静的リソースを page.tsx で使える。next.js の<Image>。public/images にした方がよさそう
６ css は public だめ。<HEAD>の<link>で通常取り込むが、MetaData では設定できない。app 配下に css 作って page で import する方式。
./grobals.css でも OK。元々のはぶち消して OK。class 名はそのまま。共通で使うならこっち。
./page.module.css っていうモジュール使うのが新しいやり方らしい。元々のはぶち消して OK。クラス名は前後にユニークなものを付与して生成される。個別に使いたい時はこっち。自動で競合しない。
７ プライベートフォルダは\_先頭。page ファイルがなければルーティングから除外される。
８ フォルダ[]は動的ルートセグメントが生成されるって。id とか使えるかも
９ レイアウトの階層は、各フォルダに layout を children で reactnode 作る
１０ なんか<Link>より useRouter フックの方が高度に設定できるって
１１ 画像は svg ってのがベクトルで定義されてて拡縮で劣化しないし、ファイルサイズ低。
１２ google フォントは環境に依存しないらしい。商用利用も可能って
１３ next.js はサーバコンポーネントらしい。サーバ負荷増えるのとなんか色々制約あるのでいいのか？

vercel
404 はデプロイを other⇒next.js にしてないのが原因
https://remindreact-lonayciam-waribikimeshis-projects.vercel.app/

git
tortise git 使っていたが、vscode のサイドバー３番目にあった。ファイルの＋ボタンでステージングしないといけない。エクスプローラ開かなくていいので使う。

TODO
spring security で post はトークンが必要 403h
list 初期表示 レイアウト
list 初期表示 ajax
list 編集ボタンで CRUD 画面遷移。id 渡し
crud 初期表示 レイアウト
crud 初期表示 ajax
crud 登録ボタン
rest save のみでいいのでは
crud 削除ボタン
ナビゲーション
css Tailwind っての使った方がいいんだろね。インストールから必要。bootstrap とかも使えるみたいだけど
javascipt そういや promise ってあったな。なんだっけ？非同期的なものやった気が。
useEffect 非推奨らしい
json server ってのがモック使える
server component react18 から app 配下は基本サーバコンポーネント。serveraction はシンプルに画面 submit
クライアントコンポーネントはファイルの先頭行に記載。イベント処理など
