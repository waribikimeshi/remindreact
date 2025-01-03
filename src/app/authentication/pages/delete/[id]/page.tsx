
"use client"  //consoleはF12のブラウザ側

import { useEffect, useRef, useState } from "react";
import { IAuthentication } from "../../../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import Head from "next/head";
import { useParams } from "next/navigation";
import MyInfo from "@/app/components/molecules/MyInfo";
import MyError from "@/app/components/molecules/MyError";
import MyLoading from "@/app/components/molecules/MyLoading";
import { Delete, Read } from "../../../request/api";


//クライアントレンダリングでasync awaitはエラーになる
export default function Page(){
    const params = useParams();
    const [authentication, setAuthentication] = useState<IAuthentication | undefined>(undefined);
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


    // 再試行ボタンのクリックイベント
    const handleRetry = () => {
        console.log('handleRetry');

        init();

        fetchAuthentication(); // データを再取得
    };    


    //イベントは各画面から。これは入力値なのでサーバサイドレンダリングできないと思う。
      const handleSubmit = async (authentication:IAuthentication) => {
        
        // return newAuthentication;
        if(isSubmiting.current) return; //送信処理中なら抜ける
        isSubmiting.current = true; //送信処理中
    
        try {
            console.log("handleSubmit");

            init();

            setIsLoading(true); // ローディング開始

            console.log('データ削除');

            // Update関数でデータを登録
            const result = await Delete(params.id as string);

            setAuthentication(undefined); // データを状態にセット

            console.log(result);

            //完了メッセージ
            setInfo("削除されました");

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
                <title>delete | remindreact</title>
            </Head>
            {/* インフォメッセージがある場合の表示 */}
            {info && (
                <MyInfo info={info} />
            )}

            {/* エラーメッセージがある場合の表示 */}
            {error && (
                <MyError error={error} handleRetry={handleRetry} />
            )}

            {/* ローディング状態の表示 */}
            {isLoading && (
                <MyLoading />
            )}

            {/* データがロードされたら表示 */}
            {!isLoading && (
                <AuthenticationCrud 
                onSubmit={handleSubmit} 
                defaultValues={authentication} isReadOnly={true}
                hrefReturn="/authentication/pages/list"

                />
            )}


        </>
    );
}  
