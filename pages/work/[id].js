import Layout from '../../components/layout'
import { getAllWorkIds, getWorkData } from '../../lib/work'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'


export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id)
  return {
    props: {
      workData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

export default function Work({ workData }) {
  return (
    <Layout>
      <Head>
        <title>{workData.title}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>{workData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={workData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </Layout>
  )
}