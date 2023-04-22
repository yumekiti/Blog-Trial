import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Header from './components/Header'

export default function Index() {
  return (
    <>
      <Head>

      </Head>
      <Box w={'100%'} h={'100%'}>
        <Header />
      </Box>
    </>
  )
}