"use client"  //consoleはF12のブラウザ側

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IAuthentication } from "../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import { Metadata } from "next";
import { create } from "../api";
import Head from "next/head";

//サーバクライアントでしか使えない。クライアントはheadタグで
// export const metadata: Metadata = {
//     //TODO:タイトル個別画面でmetadata定義
//     title: "authentication/create | remindreact",  
//   };

//クライアントレンダリングでasync awaitはエラーになる
export default function Page(){

  //イベントは各画面から。
  const handleSubmit = async (authentication:IAuthentication) => {
    console.log(authentication);

    const newAuthentication = await create(authentication);

    //awaitとかいるのか
    //再描画

    console.log(newAuthentication);

  };


    return(
        <>
            <Head>
                <title>create | remindreact</title>
            </Head>        
            <AuthenticationCrud onSubmit={handleSubmit} />
        </>
    );
}