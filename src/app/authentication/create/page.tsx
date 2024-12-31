"use client"  //consoleはF12のブラウザ側

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IAuthentication } from "../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import { Metadata } from "next";
import { Create } from "../api";
import Head from "next/head";
import { useEffect, useState } from "react";

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
  const [authentication, setAuthentication] = useState<IAuthentication>(defaultValue);


  //レンダリングの後に中身が実行される。第二引数は実行するタイミングを指定。空の配列はリロード時のみ実行。変数指定すると変化した際に実行。
  // useEffect(() => {
  //     console.log("副作用");

  //   }, []);

  console.log("レンダリング");


  //イベントは各画面から。これは入力値なのでサーバサイドレンダリングできないと思う。
  const handleSubmit = async (authentication:IAuthentication) => {
    console.log(authentication);

    const newAuthentication = await Create(authentication);

    //awaitとかいるのか
    //再描画
    setAuthentication(newAuthentication);

    console.log(newAuthentication);

    // return newAuthentication;

  };


    return(
        <>
            <Head>
                <title>create | remindreact</title>
            </Head>        
            <AuthenticationCrud onSubmit={handleSubmit} defaultValues={authentication}/>
        </>
    );
}