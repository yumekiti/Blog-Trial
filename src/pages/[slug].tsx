import { GetStaticPaths, GetStaticProps } from 'next'
import { convertToHtml, getFile, getSlugs, readFile } from "../libs/markdown";
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import Head from 'next/head'
import { Image, Card, CardHeader, CardBody, Text, Box, Grid, GridItem } from '@chakra-ui/react'
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
    const branchName = process.env.BRANCH_NAME !== undefined ? '/' + process.env.BRANCH_NAME : ''
    const src = `${branchName}/contents/${slug}/${image.src}`;
    const alt = image.alt;
    return <Image src={src} alt={alt} objectFit={'contain'} />
  },
})

export default function Post({ postData, slug }: PostProps) {
  const { title, date, visual, tags } = postData.data;
  const renderers = components(slug);
  const branchName = process.env.BRANCH_NAME !== undefined ? '/' + process.env.BRANCH_NAME : ''

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Grid
        w={'100%'}
        h={'92vh'}
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
            <Image src={`${branchName}/contents/${slug}/${visual}`} alt={title} width={400} height={300} objectFit={'contain'} />
            <Text fontSize={'6xl'} marginTop={'2rem'}>{title}</Text>
            <Text fontSize={'2xl'}>{date}</Text>
            <Box marginTop={'2rem'}>
              {
                tags.map((tag, index) => {
                  return (
                    <Text key={index} fontSize={'3xl'} display={'inline'} marginRight={'1rem'}>{tag}</Text>
                  )
                })
              }
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1} overflow={'hidden'}>
          <Card bg={'#fff'} padding={'2rem'} margin={'2rem'} height={'95%'} overflowY={'scroll'}>
            <CardHeader>
              <Text fontSize={'xl'}>{title}</Text>
            </CardHeader>
            <CardBody>
              <ReactMarkdown className='markdown' components={ChakraUIRenderer(renderers)}>
                {postData.content}
              </ReactMarkdown>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  )
}
