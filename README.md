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
１３ next.js はサーバコンポーネントらしい。サーバ負荷増えるのとなんか色々制約あるのでいいのか？クライアントの環境には影響しないがクライアントコンポーネントにするにはファイル先頭に記載必要。
なんか親と子を混在させると await とかエラーになる。クライアントで統一。page の async はクライアントコンポーネントではエラーになる。
なんか get はサーバサイドがいいらしい。post の見直しから

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
useEffect 非推奨らしい ⇒ ユーチューブの誤情報
json server ってのがモック使える
server component react18 から app 配下は基本サーバコンポーネント。serveraction はシンプルに画面 submit
クライアントコンポーネントはファイルの先頭行に記載。イベント処理など

プロジェクトルール
fetche は page.tsx に書く。どこに書いてるか管理できなくなるらしい
レンダリングは components に書く。ルーティング対象外なので page.tsx の作成は禁止
components は atomic デザインパターンを採用する。
atoms(原子)最小。ボタンとか
molecules(分子)atoms を複数組み合わせた再利用可能な単位。検索テキスト＋検索ボタンとか
organisms(有機物)atoms と molecule を組み合わせた再利用できなくてもいい単位。ロゴ＋検索エリアとか商品画像＋商品名＋値段とか
templates(テンプレート)ページ構造とかレイアウト構成とか。next.js は layout.tsx あるけど。これが実質の react ページ
pages(ページ)template に実データ反映されたもの。next.js の page.tsx なので components には作らない。
個別画面は app 直下に画面フォルダ/[id]

便利コマンド
rafce:でひな形ソース展開してくれる。VsCode の拡張機能 ES7 React/Redux/GraphQL/React-Native snippets

react
１ まず表示したいページにどういう部品に分割するかの単位でタグ。検索エリア＋リスト＋新規追加ボタン＋行編集＋行削除＋フッタ保存
２ components/templates に１の単位を頭大文字でファイル作る
３ type は個別直下に types.ts で定義
４ api.ts に rest 呼び出し
５ form は react hook form
６ "use client" 使わざる得ないが、SPA から rest で port 違うので CORS 許可しないとアクセスできない。restcontroller に許可
７ [id]の中でもフォルダ分けてそれぞれ page を分ける文化っぽい
８ onsubmit をどうすればいいかハマったが、react の考え方は変化するものは外部から引数で渡す、変化しないものは自分で持つ観点みたいだね。状態保持は除いて。
９　"use client"は親で定義してたら部品もクライアントになる
１０ 左下の errors × ボタンは開発モードの時に出るらしい
１１ 本番ビルドすると未使用変数とかエラーになるな。typescript とか eslint とか
１２ ts と tsx の違いは JSX 含むのからしい。わかりにくっ

react hook form
register:フォームから入力された値の state 管理、バリデーション処理
watch:フォームの値変更の監視
handleSubmit:フォームを submit した時の処理をかけます。handleSubmit()は引数を二つ受け取ります。引数 1 はバリデーション処理が OK の場合の関数、引数 2 はバリデーション処理が NG の場合に呼ばれる関数が入ります。
formState:フォームの状態を object で管理。formState: { errors, isDirty, isSubmitting, touchedFields, submitCount }
Props:デフォルト onSubmit。mode とかカスタマイズできる。
checkbox の必須チェックは true 以外エラーになる。値が入ってるって意味じゃない。false でハマった。
再描画は reset つかうみたい

とりあえずソースがバラケルのが気になるな。どこに何書いてるか把握できなくなりそう

とりあえず CRUD は動作した。エラー処理から
