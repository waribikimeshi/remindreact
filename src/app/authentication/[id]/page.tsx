import { Metadata } from "next";
import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"
import { Suspense } from "react";
import { IAuthentication } from "../types";
import { readAll } from "../api";
import AuthenticationList from "@/app/components/templates/AuthenticationList";

export const metadata: Metadata = {
    //TODO:タイトル個別画面でmetadata定義
    title: "authentication/list | remindreact",  
  };
  


export default async function Page() {


    return (
    
        <>

        </>
    )
}
  
