"use client"  //consoleはF12のブラウザ側

import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"
import { useEffect, useState } from "react";
import AuthenticationList from "@/app/components/templates/AuthenticationList";
import { ReadAll } from "../api";
import Head from "next/head";
import { IAuthentication } from "../types";
import MyError from "@/app/components/molecules/MyError";
import MyLoading from "@/app/components/molecules/MyLoading";

// //getはサーバコンポーネントがいいらしい
// export const metadata: Metadata = {
//     //TODO:タイトル個別画面でmetadata定義
//     title: "list | remindreact",  
//   };

  
export default function Page() {
    // 状態の定義
    const [authenticationList, setAuthenticationList] = useState<IAuthentication[]>([]);
    const [error, setError] = useState<string | null>(null); // エラー管理
    const [isLoading, setIsLoading] = useState<boolean>(false); // ローディング状態

    //初期化 reactはstate駆動になってる。DOM操作と書き方違うだけ。だいぶ省略できるね
    const init = () =>{
        //constで定義しているだけなので、実際の走行は呼び出し箇所になる。なのでログ実行箇所も想定順にするには注意。
        console.log('初期化');

        setAuthenticationList([]); // 前回の結果をクリア

        setError(null); // エラー状態をリセット

    };

    // データを取得する非同期関数
    const fetchAuthenticationList = async () => {
        try {

            init();

            setIsLoading(true); // ローディング開始

            console.log('データ表示');

            // ReadAll関数でデータを取得
            const result = await ReadAll();

            setAuthenticationList(result); // データを状態にセット
            
        } catch (error: unknown) {

            console.error('fetchで例外');

            if (error instanceof Error) {
                // `error` が Error インスタンスであれば、エラーメッセージを取得
                setError(error.message); // 詳細なエラーメッセージを表示

            } else {
                // `error` がError以外の場合は汎用的なエラーメッセージを表示
                setError('予期しないエラーが発生しました。');
            }
    
            setAuthenticationList([]); // 空の配列を設定して、表示をクリア

        } finally {
            setIsLoading(false); // ローディング終了
        }            
    };

    // コンポーネントの初回レンダリング時にデータを取得
    useEffect(() => {
        console.log('useEffect');

        fetchAuthenticationList(); // データを取得

    }, []); // 空の依存配列で、コンポーネントの初回レンダリング時のみ実行

    // 再試行ボタンのクリックイベント
    const handleRetry = () => {
        console.log('handleRetry');

        init();

        fetchAuthenticationList(); // データを再取得
    };    

    console.log('レンダリング');
    return (
    
        <>
            <Head>
                <title>list | remindreact</title>
            </Head>        

            <div className="container">
                {/* <div className={styles.sitetitle}>http://localhost:3000/authentication/list</div>
                <div>リスト</div>
                <div>app\authentication\list\page.tsx</div> */}
                <p><Link href="/">エントリポイントへ遷移</Link></p>
                {/* <p><Link href="/authentication/create">createへ遷移</Link></p> */}


                {/* <Suspense fallback={<div>Loading...</div>}> */}
                {/* <AuthenticationList authenticationList={authenticationList}/> */}
                {/* </Suspense> */}

                {/* エラーメッセージがある場合の表示 */}
                {error && (
                    <MyError error={error} handleRetry={handleRetry} />
                )}

                {/* ローディング状態の表示 */}
                {isLoading && (
                    <MyLoading />
                )}

                {/* データがロードされたらリストを表示 */}
                {!isLoading && (
                    <AuthenticationList authenticationList={authenticationList} />
                )}
            </div>

        </>
    )
}
  
