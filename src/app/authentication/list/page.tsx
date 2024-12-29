import { Metadata } from "next";
import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"
import { Suspense } from "react";
import AuthenticationList from "@/app/components/templates/AuthenticationList";
import { readAll } from "../api";

//getはサーバコンポーネントがいいらしい
export const metadata: Metadata = {
    //TODO:タイトル個別画面でmetadata定義
    title: "list | remindreact",  
  };

  
export default async function Page() {

    //restから取得
    const authenticationList = await readAll();

    return (
    
        <>
        <div className="container">
            <div className={styles.sitetitle}>http://localhost:3000/authentication/list</div>
            <div>リスト</div>
            <div>app\authentication\list\page.tsx</div>
            <p><Link href="/">エントリポイントへ遷移</Link></p>
            <p><Link href="/authentication/create">createへ遷移</Link></p>


            <Suspense fallback={<div>Loading...</div>}>
            <AuthenticationList authenticationList={authenticationList}/>
            </Suspense>


        </div>

        </>
    )
}
  
