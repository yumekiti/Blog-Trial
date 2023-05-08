import { GetStaticPaths, GetStaticProps } from 'next'
import Image from "next/image";
import { convertToHtml, getFile, getSlugs, readFile } from "../libs/markdown";
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import Head from 'next/head'
import { Card, CardHeader, CardBody, Text, Box, Grid, GridItem } from '@chakra-ui/react'
import Header from '../components/Header'

type PostProps = {
  postData: {
    content: string
    data: {
      title: string
      date: string
      visual: string
      tags: string[]
    }
  },
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps, { slug: string }> = async ({ params }) => {
  const slug = String(params?.slug)
  const file = getFile(slug)
  const { content, data } = readFile(file)
  const postData = {
    content: content,
    data,
  }
  return { props: { postData, slug } }
}

const components = (slug: string) => ({
  img: (image: any) => {
    const src = `${process.env.BRANCH_NAME ? process.env.BRANCH_NAME : ''}/contents/${slug}/${image.src}`;
    const metaString = image.alt;
    const alt = metaString.replace(/ *{[\d:\/]+} */g, "");
    const matchResult = metaString.match(/{((\d+):)?(\d+\/\d+)}/);
    const aspectRatio = matchResult?.[3] || "16/9";
    const maxWidth = matchResult?.[2] || "600";
    const [aspectW, aspectH] = aspectRatio.split("/").map((str: any) => Number(str));
    const width = Math.min(Number(maxWidth), 640);
    const height = width * (aspectH / aspectW);

    return <Image src={src} alt={alt} width={width} height={height} />;
  },
})

export default function Post({ postData, slug }: PostProps) {
  const { title, date, visual, tags } = postData.data;
  const renderers = components(slug);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Grid
        w={'100%'}
        h={'95vh'}
        templateColumns='repeat(2, 1fr)'
        gap={4}
        bgGradient={'linear(to-tl,blue.200,purple.200)'}
      >
        <GridItem
          colSpan={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'fixed'}
          top={'55%'}
          right={0}
          transform={'translateY(-50%)'}
          w={'50%'}
        >
          <Box padding={'2rem'}>
            <Image src={`/contents/${slug}/${visual}`} alt={title} width={640} height={360} />
            <Text fontSize={'6xl'} marginTop={'2rem'}>{title}</Text>
            <Text fontSize={'2xl'}>{date}</Text>
            <Text fontSize={'3xl'} marginTop={'2rem'}>{tags}</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Card bg={'#fff'} boxShadow={'dark-lg'} padding={'2rem'} margin={'2rem'}>
            <CardHeader>
              <Text fontSize={'xl'}>{title}</Text>
            </CardHeader>
            <CardBody>
              <ReactMarkdown components={ChakraUIRenderer(renderers)}>
                {postData.content}
              </ReactMarkdown>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  )
}
