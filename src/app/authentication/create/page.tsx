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

  const defaultValue:IAuthentication = {
    id: 0,
    mailAddress: "aaa@gmail.com",
    password: "{bcrypt}$2a$10$BooaIiRno2t5XKmsroWHG.HC9QqIa8Z4BUahMLaI8vRj3Oo4Tfyx.",
    role: "ROLE_PROVIDER_CONTRACT_2",
    expirationDate: "9999-12-31",
    lock: false,
    enabled: false,
    version: 0,
    createdUser: "anonymousUser",
    createDatetime: "2020-08-15T02:58:00.000+00:00",
    lastModifiedUser: "anonymousUser",
    lastModifiedDatetime: "2020-08-15T02:58:00.000+00:00"
  };

  //イベントは各画面から。これは入力値なのでサーバサイドレンダリングできないと思う。
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
            <AuthenticationCrud onSubmit={handleSubmit} defaultValues={defaultValue}/>
        </>
    );
}