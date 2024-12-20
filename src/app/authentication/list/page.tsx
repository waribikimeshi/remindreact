import { Metadata } from "next";
import Link from "next/link";
//TODO:cssインポート
import styles from "../../page.module.css"

export const metadata: Metadata = {
    //TODO:タイトル個別画面でmetadata定義
    title: "authentication/list | remindreact",  
  };
  

//TODO:型。maketypesにrestのjson貼付けて作成した
export interface Authentication {
    id: number;
    mailAddress: string;
    password: string;
    role: string;
    expirationDate: string;
    lock: boolean;
    enabled: boolean;
    version: number;
    createdUser: string;
    createDatetime: string;
    lastModifiedUser: string;
    lastModifiedDatetime: string;
  }
  
export default async function Page() {
    const data = await fetch('http://localhost:8080/v20241209/authentication/list');
    const posts = await data.json();
    return (
    
        <>
        <div className="container">
            <div className={styles.sitetitle}>http://localhost:3000/authentication/list</div>
            <div>リスト</div>
            <div>app\authentication\list\page.tsx</div>
            <p><Link href="/">エントリポイントへ遷移</Link></p>

        <ul>
            {posts.map((post:Authentication) => (
            <li key={post.id}>
                <span>{post.mailAddress}</span>
                <span>{post.password}</span>
                <span>{post.role}</span>
                <span>{post.expirationDate}</span>
                <span>{post.lock}</span>
                <span>{post.enabled}</span>
                <span>{post.version}</span>
                <span>{post.createdUser}</span>
                <span>{post.createDatetime}</span>
                <span>{post.lastModifiedUser}</span>
                <span>{post.lastModifiedDatetime}</span>
                
            </li>
            ))}
        </ul>


        </div>

        </>
    )
}
  
