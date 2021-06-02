import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import styles from './index.module.scss'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Section */}
      <section className={`${styles.hero_container} container`}>
        <div className={styles.hero_main}>
          <div className={styles.hero_textWrapper}>
            <h1 className={styles.hero_heading}>
              Hi, I'm Brennan!
            </h1>
            <div className={styles.hero_textBlock}>
              By day I'm a software engineer with PBS NewsHour. By night I make things. Creative expression is my passion, and I'm always open to learning about new opportunities.
            </div>
            <div className={styles.buttonLarge_wrapper}>
              <div className={styles.buttonLarge_fill}></div>
              <a href="#contact" className={styles.buttonLarge_top}>Let's talk</a>
            </div>
          </div>
          <div className={styles.hero_imageContainer}>
            <div className={styles.hero_imageWrapper}>
              <Image
                  priority
                  src="/images/profile.jpg"
                  height={500}
                  width={500}
                  layout="responsive"
                  className="test"
                  alt={"Brennan Butler Photo"}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className={styles.work}>
        <div class="container">
          <h2 className={styles.work_header}>A preview of my work</h2>
          <div className={styles.work_previewContainer}>
            <div className={styles.work_preview}>
              <a href="https://pbs.org/newshour" className={styles.work_link}>
                <figure className={styles.work_hover}>
                  <img src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour-hover.jpg" alt="Tease hover image for PBS NewsHour" />
                </figure>

                <div className={styles.work_figure}>
                  <video poster="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.jpg" className={styles.work_video} preload="" muted="muted" loop="loop" playsinline="" autoplay="autoplay">
                    <source src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <h2 className={styles.work_title}>
                  <strong>PBS NewsHour:</strong> Trusted news for more than 40 years
                </h2>
              </a>
            </div>
            <div className={styles.work_preview}>
              <a href="https://orangeastronaut.com" className={styles.work_link}>
                <figure className={styles.work_hover}>
                  <img src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour-hover.jpg" alt="Tease hover image for PBS NewsHour" />
                </figure>

                <div className={styles.work_figure}>
                  <video poster="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.jpg" className={styles.work_video} preload="" muted="muted" loop="loop" playsinline="" autoplay="autoplay">
                    <source src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <h2 className={styles.work_title}>
                  <strong>PBS NewsHour:</strong> Trusted news for more than 40 years
                </h2>
              </a>
            </div>
            <div className={styles.work_preview}>
              <a href="https://artscanvas.org" className={styles.work_link}>
                <figure className={styles.work_hover}>
                  <img src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour-hover.jpg" alt="Tease hover image for PBS NewsHour" />
                </figure>

                <div className={styles.work_figure}>
                  <video poster="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.jpg" className={styles.work_video} preload="" muted="muted" loop="loop" playsinline="" autoplay="autoplay">
                    <source src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <h2 className={styles.work_title}>
                  <strong>PBS NewsHour:</strong> Trusted news for more than 40 years
                </h2>
              </a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}