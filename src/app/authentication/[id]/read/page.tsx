
"use client"  //consoleはF12のブラウザ側

import { GetServerSideProps, Metadata } from "next";
import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"
import { Suspense, useEffect, useState } from "react";
import { IAuthentication } from "../../types";
import { read, readAll } from "../../api";
import AuthenticationList from "@/app/components/templates/AuthenticationList";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import Head from "next/head";
import { useParams, useSearchParams } from "next/navigation";

//getはサーバコンポーネントがいいらしい
//サーバクライアントでしか使えない。クライアントはheadタグで
// export const metadata: Metadata = {
//     //TODO:タイトル個別画面でmetadata定義
//     title: "read | remindreact",  
//   };


//クライアントレンダリングでasync awaitはエラーになる
export default function Page(){
    const params = useParams();
    const [authentication, setAuthentication] = useState<IAuthentication>();

    //レンダリングの後に中身が実行される。第二引数は実行するタイミングを指定。空の配列はリロード時のみ実行。変数指定すると変化した際に実行。
    useEffect(() => {
        console.log("副作用");
        const fetchData = async () => {
            const result = await read(params.id as string);
            setAuthentication(result);
            console.log(result);
        };
    
        fetchData();
      }, [params.id]);  // URL直変更でもデータを取得。

    // //Next.jsのバージョンが15になってから、paramsの処理が非同期（async）になった
    // const { id } = await params;
    // //restから取得。クライアントサイドから取ることもできるがサーバサイドの方が通信減らせそうだと思う。
    // const authentication  =  await read(id);
    console.log("レンダリング");

    if (!authentication) {
        // データがまだ取得されていない場合、ローディングを表示
        return <div>Loading...</div>;
    }

    return(
        <>

            <Head>
                <title>read | remindreact</title>
            </Head>        
            <Suspense fallback={<div>Loading...</div>}>
            <AuthenticationCrud defaultValues={authentication} isReadOnly={true}/>
            {/* <AuthenticationCrud defaultValues={authentication} /> */}
            </Suspense>

        </>
    );
}  
