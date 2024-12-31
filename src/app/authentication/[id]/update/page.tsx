
"use client"  //consoleはF12のブラウザ側

import { useEffect, useState } from "react";
import { IAuthentication } from "../../types";
import { Read, Update } from "../../api";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import Head from "next/head";
import { useParams } from "next/navigation";

//クライアントレンダリングでasync awaitはエラーになる
export default function Page(){
    const params = useParams();
    const [authentication, setAuthentication] = useState<IAuthentication>();

    //レンダリングの後に中身が実行される。第二引数は実行するタイミングを指定。空の配列はリロード時のみ実行。変数指定すると変化した際に実行。
    useEffect(() => {
        console.log("副作用");

        //データ取得関数定義
        const fetchData = async () => {
            const result = await Read(params.id as string);
            setAuthentication(result);
            console.log(result);
        };

        //データ取得の実行
        fetchData();

      }, [params.id]);  // URL直変更でもデータを取得。

    console.log("レンダリング");

    if (!authentication) {
        // データがまだ取得されていない場合、ローディングを表示
        return <div>Loading...</div>;
    }

      //イベントは各画面から。これは入力値なのでサーバサイドレンダリングできないと思う。
      const handleSubmit = async (authentication:IAuthentication) => {
        console.log(authentication);
    
        const newAuthentication = await Update(authentication);
    
        //awaitとかいるのか
        //再描画
        setAuthentication(newAuthentication);
    
        console.log(newAuthentication);
    
        // return newAuthentication;
    
      };

    return(
        <>

            <Head>
                <title>update | remindreact</title>
            </Head>        
            <AuthenticationCrud onSubmit={handleSubmit} defaultValues={authentication}/>

        </>
    );
}  
