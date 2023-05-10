import { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import MainBijual from '../components/MainBijual'
import Profile from '../components/Profile'
import Article from '../components/Article'
import { getPosts } from '../libs/markdown'

type Props = {
  posts: any
}

export default function Index({ posts }: Props) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Header />
      <MainBijual />
      <Profile />
      <Article posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};
