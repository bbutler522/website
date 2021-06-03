import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import styles from './index.module.scss'
import Image from 'next/image'

export default function Work() {
  return (
    <Layout>
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
    </Layout>
  );
}