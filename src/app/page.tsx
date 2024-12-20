import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>http://localhost:3000/</div>
      <div>エントリポイント</div>
      <div>app/page.tsx</div>
      <p><Link href="authentication/list">リストへ遷移</Link></p>
      <Image src="/images/next.svg" alt="next.svg" width={100} height={100}></Image>
    </>
  );
}
