import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Header from './components/Header'
import { getSlugs } from '../libs/markdown'
import Link from "next/link";
import { getPosts } from "@/libs/markdown";

import { GetStaticProps } from 'next'

type Props = {
  posts: any
}

export default function Index({ posts }: Props) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <a href={`/${post.slug}`} key={post.slug}>
            <li>
              <h2>{post.title}</h2>
              <ul>
                {post.tags.map((tag: any) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};
