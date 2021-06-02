import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Footer from './footer'

const name = 'Brennan Butler'
export const siteTitle = 'Brennan Butler | Engineer, Designer, Producer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Brennan Butler is a Software Engineer for PBS NewsHour and living in Brooklyn. He is an engieer, UX/UI designer, and musician/producer. Get in touch!"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
            rel="preload"
            href="/fonts/jakarta/PlusJakartaSans-Regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/jakarta/PlusJakartaSans-Bold.woff2"
            as="font"
            crossOrigin=""
          />
      </Head>
      <header className={styles.header}>
        
        <div className={styles.homeLink}>
          <Link href="/">
            <Image
              priority
              src="/images/logo-white-500.png"
              height={36}
              width={152}
              alt={"Brennan Made Logo"}
            />
          </Link>
        </div>
        
      </header>
      <main>{children}</main>

      <Footer></Footer>
    </div>
  )
}