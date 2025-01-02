"use client"  //consoleはF12のブラウザ側

import { IAuthentication } from "../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import { Create } from "../api";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import MyLoading from "@/app/components/molecules/MyLoading";
import MyError from "@/app/components/molecules/MyError";
import MyInfo from "@/app/components/molecules/MyInfo";

//サーバクライアントでしか使えない。クライアントはheadタグで
// export const metadata: Metadata = {
//     //TODO:タイトル個別画面でmetadata定義
//     title: "authentication/create | remindreact",  
//   };

//動確用データ
  const defaultValue:IAuthentication = {
  id: 0,
  mailAddress: "aaa@gmail.com",
  password: "{bcrypt}$2a$10$BooaIiRno2t5XKmsroWHG.HC9QqIa8Z4BUahMLaI8vRj3Oo4Tfyx.",
  role: "ROLE_PROVIDER_CONTRACT_2",
  expirationDate: "9999-12-31",
  lock: false,
  enabled: true,
  version: 0,
  createdUser: "anonymousUser",
  createDatetime: "2020-08-15T02:58:00.000+00:00",
  lastModifiedUser: "anonymousUser",
  lastModifiedDatetime: "2020-08-15T02:58:00.000+00:00"
};

//クライアントレンダリングでasync awaitはエラーになる
export default function Page(){

  //うーんreact hook formとstate管理が重複するのかね。なんかそういうわけでもないみたい
  const [authentication, setAuthentication] = useState<IAuthentication | undefined>(defaultValue);
  const [error, setError] = useState<string | null>(null); // エラー管理
  const [info, setInfo] = useState<string | null>(null); // インフォ管理
  const [isLoading, setIsLoading] = useState<boolean>(false); // ローディング状態
  const isSubmiting = useRef<boolean>(false); //二度押し防止。再レンダリングされないらしい

  //初期化 reactはstate駆動になってる。DOM操作と書き方違うだけ。だいぶ省略できるね
  const init = () =>{
    //constで定義しているだけなので、実際の走行は呼び出し箇所になる。なのでログ実行箇所も想定順にするには注意。
    console.log('初期化');

    // setAuthentication(undefined); // 前回の結果をクリア。入力値が消えそうなので止める

    setError(null); // エラー状態をリセット
    setInfo(null); // インフォをリセット
    
  };

  //レンダリングの後に中身が実行される。第二引数は実行するタイミングを指定。空の配列はリロード時のみ実行。変数指定すると変化した際に実行。
  //なくても再描画された
  // useEffect(() => {
  //     console.log("副作用");

  //   }, []);



  //イベントは各画面から。これは入力値なのでサーバサイドレンダリングできないと思う。
  const handleSubmit = async (authentication:IAuthentication) => {
    if(isSubmiting.current) return; //送信処理中なら抜ける
    isSubmiting.current = true; //送信処理中

    try {
        console.log("handleSubmit");

        init();

        setIsLoading(true); // ローディング開始

        console.log('データ登録');

        // Create関数でデータを登録
        const newAuthentication = await Create(authentication);

        setAuthentication(newAuthentication); // データを状態にセット

        console.log(newAuthentication);

        //完了メッセージ
        setInfo("登録されました");

        //登録非活性

    } catch (error: unknown) {

        console.error('fetchで例外');

        if (error instanceof Error) {
            // `error` が Error インスタンスであれば、エラーメッセージを取得
            setError(error.message); // 詳細なエラーメッセージを表示

        } else {
            // `error` がError以外の場合は汎用的なエラーメッセージを表示
            setError('予期しないエラーが発生しました。');
        }

        // setAuthentication(undefined); // nullを設定して、表示をクリア。入力消えるのでやめる

    } finally {
        setIsLoading(false); // ローディング終了
        isSubmiting.current = false; //送信完了
    }            


  };

    console.log("レンダリング");
    return(
        <>
            <Head>
                <title>create | remindreact</title>
            </Head>
            {/* インフォメッセージがある場合の表示 */}
            {info && (
                <MyInfo info={info} />
            )}

            {/* エラーメッセージがある場合の表示 */}
            {error && (
                <MyError error={error} />
            )}

            {/* ローディング状態の表示 */}
            {isLoading && (
                <MyLoading />
            )}

            <AuthenticationCrud onSubmit={handleSubmit} defaultValues={authentication}/>
        </>
    );
}