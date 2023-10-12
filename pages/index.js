import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Fred. I'm a full stack software developer from Pennsylvania. You can find my work on{' '}
          <a
            href='https://www.github.com/justwavethings'
            target='_blank'>
            GitHub
          </a>
          !
        </p>
        <p>(This is a sample website to test out Next.js features)</p>
      </section>
    </Layout>
  );
}
