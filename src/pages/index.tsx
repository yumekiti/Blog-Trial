import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Header from './components/Header'
import MainBijual from './components/MainBijual'
import Profil from './components/Profil'

export default function Index() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Header />
      <MainBijual />
      <Profil />
    </>
  )
}