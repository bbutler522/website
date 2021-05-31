import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

export default function PBSNewsHour({ workData }) {
  return (
    <Layout>
      <Head>
        <title>PBS NewsHour</title>
      </Head>

      <h1 className={utilStyles.headingXl}>PBS NewsHour</h1>
      <div className={utilStyles.lightText}>
        {/* <Date dateString={workData.date} /> */}
      </div>
      
    </Layout>
  )
}