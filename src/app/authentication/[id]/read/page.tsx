
import { GetServerSideProps, Metadata } from "next";
import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"
import { Suspense } from "react";
import { IAuthentication } from "../../types";
import { read, readAll } from "../../api";
import AuthenticationList from "@/app/components/templates/AuthenticationList";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import Head from "next/head";

//getはサーバコンポーネントがいいらしい
//サーバクライアントでしか使えない。クライアントはheadタグで
export const metadata: Metadata = {
    //TODO:タイトル個別画面でmetadata定義
    title: "read | remindreact",  
  };


//クライアントレンダリングでasync awaitはエラーになる
export default async function Page({params}:{params:{id:string}}){

    //Next.jsのバージョンが15になってから、paramsの処理が非同期（async）になった
    const { id } = await params;
    //restから取得。クライアントサイドから取ることもできるがサーバサイドの方が通信減らせそうだと思う。
    const authentication  =  await read(id);


    return(
        <>
            <Suspense fallback={<div>Loading...</div>}>
            <AuthenticationCrud defaultValues={authentication} isReadOnly={true}/>
            </Suspense>

        </>
    );
}  
