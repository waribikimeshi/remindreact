import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>http://localhost:3000/</div>
      <div>エントリポイント</div>
      <div>app/page.tsx</div>
      <Link href="authentication/list">リストへ遷移</Link>
    </>
  );
}
