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
            <div className="buttonLarge_wrapper">
              <div className="buttonLarge_fill"></div>
              <a href="#contact" className="buttonLarge_top">Let's talk</a>
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
                  alt={"Brennan Butler Photo"}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className={styles.work}>
        <div className="container">
          <h2 className={styles.work_header}>A preview of my work</h2>
          <div className={styles.work_previewContainer}>
            <div className={styles.work_preview}>
              <a href="https://pbs.org/newshour" className={styles.work_link}>
                
                <div className={styles.work_figure}>
                  <figure className={styles.work_hover}>
                    <Image
                      priority
                      src="/images/work/newshour-hover.jpg"
                      layout="fill"
                      alt={"Tease hover image for PBS NewsHour"}
                    />
                  </figure>
                  {/* <video poster="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.jpg" className={styles.work_video} preload="" muted="muted" loop="loop" playsinline="" autoplay="autoplay">
                    <source src="https://upstatement.com/wp-content/themes/upstatement/content/img/work/newshour.mp4" type="video/mp4" />
                  </video> */}
                </div>
                
                <h2 className={styles.work_title}>
                  <strong>PBS NewsHour:</strong>  <br/> Solid, reliable reporting for millions
                </h2>
              </a>
            </div>
            <div className={styles.work_preview}>
              <a href="https://orangeastronaut.com" className={styles.work_link}>

                <div className={styles.work_figure}>
                  <figure className={styles.work_hover}>
                    <Image
                      priority
                      src="/images/work/oa-hover.jpg"
                      layout="fill"
                      alt={"Tease hover image for PBS NewsHour"}
                    />
                  </figure>
                </div>
                
                <h2 className={styles.work_title}>
                  <strong>Orange Astronaut</strong> <br/> Helping brands communicate what they do
                </h2>
              </a>
            </div>
            <div className={styles.work_preview}>
              <a href="https://artscanvas.org" className={styles.work_link}>

                <div className={styles.work_figure}>
                  <figure className={styles.work_hover}>
                    <Image
                      priority
                      src="/images/work/canvas-hover.jpg"
                      layout="fill"
                      alt={"Tease hover image for PBS NewsHour"}
                    />
                  </figure>
                </div>
                
                <h2 className={styles.work_title}>
                  <strong>CANVAS</strong> <br/> Arts and culture from across the country
                </h2>
              </a>
            </div>
          </div>

          <p className={styles.workMessage}><strong>Contact me for more samples</strong><br />More here soon</p>
          {/* <div className="buttonSmall_wrapper">
            <div className="buttonSmall_border"></div>
            <Link href={`/work`}>
              <a className="buttonSmall_border buttonSmall_top">More Work</a>
            </Link>
          </div> */}
        </div>
      </section>

    </Layout>
  )
}