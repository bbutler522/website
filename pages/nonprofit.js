import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import styles from './nonprofit.module.scss'
import Footer from '../components/footer'

export default function Nonprofit() {


  return (
    <Layout fullWidth customFooter>
      <div className={styles.nonprofit}>
        
        <div className={styles.halfPhoto}>

          <div className={styles.halfPhoto_text}>
            <h1 className={styles.headline}>Nonprofits work hard. <span>Your website should be easy.</span></h1>
            <p className={styles.subhead}>Let's make yours for as low cost as possible!</p>
          </div>
          <div className={styles.halfPhoto_image}>
            <Image
              priority
              src="/images/photos/website-1.jpg"
              height={300}
              width={500}
              layout="responsive"
              alt={"Nonprofit website photo"}
            />
          </div>

        </div>

        <div className={styles.halfPhoto}>

          <div className={styles.halfPhoto_image}>
            <Image
              priority
              src="/images/photos/nonprofit-1.jpg"
              height={300}
              width={500}
              layout="responsive"
              alt={"Nonprofit work photo"}
            />
          </div>

          <div className={styles.halfPhoto_text}>
            <h2>Keep your focus on helping others.</h2>
            <p>I would like to work with you to build your online presence to help you increase your outreach, without wasting time trying to figure out how to build a site from the ground up.</p>
            <p>Websites cost money. <span>They shouldn't for you!</span></p>
          </div>

        </div>

        <section className={styles.smallContainer}>
          <h2>I want to create your nonprofit's site for as little cost as possible.</h2>
          <p>Websites can cost a lot, especially if you work with a big agency. While you definitely get great results, sometimes you just don't have the budget, especially early on.</p>
          <p>I'm always able to provide a free consultation to help your nonprofit weigh its options on what approach to take when building a site.</p>
          <p>There are many affordable ways to build websites now, whether it's hosting a wordpress site with a theme, or using squarespace to make building your site even easier.</p>
          <p>I would love to help you navigate these waters, and even build your site out for you in most cases.</p>
          <div className="buttonLarge_wrapper">
            <div className="buttonLarge_fill"></div>
            <a href="#contact" className="buttonLarge_top">Let's talk</a>
          </div>
        </section>

        <section className={styles.smallContainer}>
          <h2>Costs to expect</h2>
          <p>In most cases, my labor is free of charge, so there's only a few costs be aware of. Thankfully they're minimal!</p>
          <p>Squarespace will likely be around $18/mo, but includes a lot of features to make building your nonprofit site straightforward.</p>
          <p>Hosting a custom site will be around $2/mo. After the first year, the cost rises to around $5/mo, and the domain and SSL security coming to $15/yr</p>
          <p>As you can see, both of these prices should be affordable for your nonprofit, and I can help you make the decisions best for you now and down the road.</p>
        </section>

        <section className={styles.smallContainer}>
          <h2>All of this to say... Let's work together!</h2>
        </section>

      </div>

      <Footer 
        headline="Let's build your nonprofit's website!" 
        subhead="Get a free consulation, and let's start making you an affordable website!"
        source="nonprofit">
      </Footer>
    </Layout>
  )
}