
"use client"  //consoleはF12のブラウザ側

//TODO:cssインポート
import styles from "../../page.module.css"
import { useEffect, useState } from "react";
import { IAuthentication } from "../../types";
import { Read } from "../../api";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import Head from "next/head";
import { useParams } from "next/navigation";
import MyError from "@/app/components/molecules/MyError";
import MyLoading from "@/app/components/molecules/MyLoading";

//getはサーバコンポーネントがいいらしい
//サーバクライアントでしか使えない。クライアントはheadタグで
// export const metadata: Metadata = {
//     //TODO:タイトル個別画面でmetadata定義
//     title: "read | remindreact",  
//   };


//クライアントレンダリングでasync awaitはエラーになる
export default function Page(){
    // URLパラメータ
    const params = useParams();
    // 状態の定義
    const [authentication, setAuthentication] = useState<IAuthentication | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // エラー管理
    const [isLoading, setIsLoading] = useState<boolean>(false); // ローディング状態

    //初期化 reactはstate駆動になってる。DOM操作と書き方違うだけ。だいぶ省略できるね
    const init = () =>{
        //constで定義しているだけなので、実際の走行は呼び出し箇所になる。なのでログ実行箇所も想定順にするには注意。
        console.log('初期化');

        setAuthentication(undefined); // 前回の結果をクリア

        setError(null); // エラー状態をリセット

    };

    // データを取得する非同期関数
    const fetchAuthentication = async () => {
        try {

            init();

            setIsLoading(true); // ローディング開始

            console.log('データ表示');

            // ReadA関数でデータを取得
            const result = await Read(params.id as string);

            setAuthentication(result); // データを状態にセット
            
        } catch (error: unknown) {

            console.error('fetchで例外');

            if (error instanceof Error) {
                // `error` が Error インスタンスであれば、エラーメッセージを取得
                setError(error.message); // 詳細なエラーメッセージを表示

            } else {
                // `error` がError以外の場合は汎用的なエラーメッセージを表示
                setError('予期しないエラーが発生しました。');
            }
    
            setAuthentication(undefined); // nullを設定して、表示をクリア

        } finally {
            setIsLoading(false); // ローディング終了
        }            
    };
    
    //レンダリングの後に中身が実行される。第二引数は実行するタイミングを指定。空の配列はリロード時のみ実行。変数指定すると変化した際に実行。
    useEffect(() => {
        console.log('useEffect');

        fetchAuthentication();  // データを取得

      }, [params.id]);  // URL直変更でもデータを取得。

    // //Next.jsのバージョンが15になってから、paramsの処理が非同期（async）になった
    // const { id } = await params;
    // //restから取得。クライアントサイドから取ることもできるがサーバサイドの方が通信減らせそうだと思う。
    // const authentication  =  await read(id);
    // 再試行ボタンのクリックイベント
    const handleRetry = () => {
        console.log('handleRetry');

        init();

        fetchAuthentication(); // データを再取得
    };    


    // if (!authentication) {
    //     // データがまだ取得されていない場合、ローディングを表示
    //     return <div>Loading...</div>;
    // }

    console.log('レンダリング');
    return(
        <>

            <Head>
                <title>read | remindreact</title>
            </Head>        
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            {/* <AuthenticationCrud defaultValues={authentication} /> */}
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
                <AuthenticationCrud defaultValues={authentication} isReadOnly={true} isSubmit={false}/>
            )}


        </>
    );
}  
