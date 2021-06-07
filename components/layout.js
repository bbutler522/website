import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Footer from './footer'

const name = 'Brennan Butler'
export const siteTitle = 'Brennan Butler | Engineer, Designer, Producer'

export default function Layout({ children, home }) {
  function openMenu() {
    const navIcon = document.getElementById("nav-icon");
    const navMenu = document.getElementById("nav-menu");
    const navBackground = document.getElementById("nav-background");

    navBackground.removeEventListener("click", openMenu)

    navIcon.classList.toggle(styles.open)
    navMenu.classList.toggle(styles.open)
    navBackground.classList.toggle(styles.open)

    if (navMenu.classList.contains(styles.open)) {
      navBackground.addEventListener("click", openMenu)
    }
  }

  return (
    <div id="layout" className={styles.layout}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
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
      <header className={styles.navbar}>
        <div className={styles.navbar_container}>
        
          <div className={styles.homeLink}>
            <Link href="/">
              <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.16 682.76"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M279.44,253.9c27.21-12.09,53.27-10.15,77.42,8,22.54,17,33.25,47.55,26.36,74.2C368.9,282.73,334.45,255.39,279.44,253.9Z"/><path d="M763.84,336.85c-5.07-25.63-17-45.91-36.67-61.29s-42.07-22-67.63-20.67c20.33-12.2,53.54-12.27,78.11,6.58C763.35,281.19,770.75,314.24,763.84,336.85Z"/><path d="M800.05,506a17.32,17.32,0,0,0-4.68-8.52c-12.16-11.2-26.89-10.14-37.71,2.29-5.14,5.9-9.88,12.23-15.55,17.58-15.25,14.41-33.73,24.25-51.46,35.12-.12.08-.49-.25-1.08-.56,3.71-9.91,7.57-19.81,11.14-29.83,12.64-35.44,25.33-70.87,37.68-106.42A78.2,78.2,0,0,0,742,377.21c-5-30.88-27.5-54-59.8-61-45.46-9.76-83.8,4.84-115.47,37-27.15,27.59-41.34,62.13-47,100.14-4.8,32-1.17,62.86,13.89,91.82,4.27,8.2,9.71,15.78,15.27,24.68-16.12,14.92-32.26,30.31-49,45a55.58,55.58,0,0,1-17.25,9.76c-20.93,7.73-39.63-3.6-42.11-25.84-.95-8.47.24-17.27,1.13-25.85,2.86-27.53,9.11-54.12,22.17-78.87,17.49-33.14,33.82-66.91,52.07-99.63,31-55.56,62.87-110.64,94.8-165.68,20-34.44,41.08-68.22,60.94-102.72,8.66-15,13-31.64,6.65-49-14.75-40.56-44.58-64.56-85.33-75.71-16.4-4.48-28.62,2-35.91,17.52-3.26,6.93-6.15,14-9.13,21.09-43.75,103.39-87.11,206.94-131.4,310.1-18.35,42.74-31.8,86.46-36.19,132.92-2.28,24.2-14.67,42.88-35.05,56-10.66,6.88-22.48,10.38-36.15,10.72,4.3-7.46,8.44-13.73,11.69-20.43,9.52-19.63,18.9-39.34,27.93-59.2,10.09-22.2,18.84-44.9,21.33-69.42,2.27-22.33-1.54-43.13-18.22-59.5-18.1-17.78-40.13-27.54-65.6-27.59-32.57-.06-61.08,11.47-84.64,33.91-34.45,32.82-51.45,74-54.8,120.91-2.12,29.79,3.31,58,19.54,83.75,2.4,3.79,3.45,8.66,4.17,13.19.44,2.7-.11,6.35-1.7,8.46-10.91,14.53-22.36,28.58-36.84,39.9-11.49,9-24.48,11.53-38.58,10.21-10.83-1-18.13-6.6-22.21-16.73-3.42-8.48-5.57-17.1-4.5-26.3,2.64-23,8-45.28,17.31-66.49A1866.49,1866.49,0,0,1,195.05,299.81q50.88-84.27,100.61-169.25c14.16-24.1,15.21-48.65.39-73.39-16-26.65-39.6-43.2-68.27-53.23-20.64-7.22-34.09-1.57-43.5,18-22.09,45.93-44.44,91.74-65.82,138C83.62,235.32,52.84,312.31,29.12,392c-11.56,38.8-22.55,77.77-27,118.22-3.59,32.89-3.34,65.65,5.64,97.71,9.87,35.25,32.2,59,67.9,68.79,32.73,8.94,64.73,5.56,95.71-8,25.94-11.33,48.17-28.33,69.69-46.31,11.39-9.52,23.87-16.11,38.8-18.09,21.3-2.83,42.53-6.2,63.79-9.27,9.86-1.42,19.75-2.69,29.74-4,3.47,9.91,6.49,19.61,10.23,29,11.66,29.36,31.84,49.84,63,57.73,32.62,8.26,64.74,6.46,96-6.77,22.51-9.54,42.2-23.43,60.33-39.57,18.73-16.66,40.31-25.41,65.44-25.79a162.51,162.51,0,0,0,22.86-2.15c45.05-7.16,78.6-31.73,103.91-68.83C801.29,525.71,802.32,516.12,800.05,506ZM244.41,395.89c-3.44,35.88-13.2,69.94-30.74,101.58-1.51,2.72-3.54,5.16-5.74,8.31a35.33,35.33,0,0,1-7.88-18.54c-5-40.52,6.45-75.67,35.14-105a55.8,55.8,0,0,1,6.22-4.83l2,.3C243.78,383.8,245,389.93,244.41,395.89Zm373.73,9.22c-2.53,19.67-10.17,37.81-17.59,56-6.72,16.45-13.24,33-19.74,49.19-20.73-29.93-1.37-112.88,39.11-133.42C619.31,387.08,619.29,396.17,618.14,405.11Z"/></g></g></svg>
                <h2>Brennan Butler</h2>
              </div>
            </Link>
          </div>

          <ul className={styles.navLinks}>
            <li>
              <Link href="/#work">
                <a>Work</a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>

          <div className={styles.navMenuContainer}>
            <div className={styles.navIcon_Container} onClick={() => openMenu()}>
              <div id="nav-icon" className={styles.navIcon}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <aside id="nav-menu" className={styles.navMenu}>
              {/* <Link href={`/work`}>
                Work
              </Link> */}
              <ul className={styles.navMenu_links}>
                <li>
                  <Link href="/#work">
                    <a>Work</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </aside>
            <div id="nav-background" className={styles.navBackground}></div>
          </div>

        </div>
      </header>
      <main id="main">{children}</main>

      <Footer></Footer>
    </div>
  )
}