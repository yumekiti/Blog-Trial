import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Header from './components/Header'
import { getSlugs } from '../libs/markdown'
import Link from "next/link";

import { GetStaticProps } from 'next'

type Props = {
  slugs: string[]
}

export default function Index({ slugs }: Props) {
  return (
    <>
      <ul>
        {slugs.map((slug, i) => {
          return (
            <li key={i}>
              <Link href={`/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      slugs: getSlugs(),
    },
  };
};
