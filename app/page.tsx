import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <Link href="bots/qa" className={styles.card}>
          <h2 className={inter.className}>
            Q&A <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get answers based on Existing Knowledge.
          </p>
        </Link>

        <Link href="bots/chatbot" className={styles.card}>
          <h2 className={inter.className}>
            Chat <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Have a one-on-one chat with our AI.</p>
        </Link>
      </div>
    </main>
  );
}
