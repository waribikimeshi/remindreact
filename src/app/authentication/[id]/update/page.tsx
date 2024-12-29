import { Metadata } from "next";
import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"
import { Suspense } from "react";
import { IAuthentication } from "../../types";
import { read, readAll } from "../../api";
import AuthenticationList from "@/app/components/templates/AuthenticationList";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";

export const metadata: Metadata = {
    //TODO:タイトル個別画面でmetadata定義
    title: "authentication/update | remindreact",  
  };
  


export default async function Page({params}:{params:{id:string}}){

    //restから取得
    const authentication = await read(params.id);

      const handleSubmit = async (authentication:IAuthentication) => {
        console.log(authentication);
    
        // const newAuthentication = await create(authentication);
    
        //awaitとかいるのか
        //再描画
    
        // console.log(newAuthentication);
    
      };
    
    return(
        <>
            <AuthenticationCrud defaultValues={authentication} onSubmit={handleSubmit}/>
        </>
    );
}  
