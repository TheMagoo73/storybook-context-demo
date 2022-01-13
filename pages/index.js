import Head from 'next/head'
import CounterDisplay from '../components/CounterDisplay'
import Decrementer from '../components/Decrementer'
import Incrementer from '../components/Incrementer'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CounterDisplay/>
        <div>
          <Incrementer/>
          <Decrementer/>
        </div>
      </main>
    </div>
  )
}
