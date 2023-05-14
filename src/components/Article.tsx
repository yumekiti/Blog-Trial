import { FC } from 'react'
import { Link, Image, Flex, Text, Button } from '@chakra-ui/react'

type Props = {
    posts: any
}

const Article: FC<Props> = ({ posts }) => {
    return (
        <>
            <Flex w={'100%'} h={'150rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} marginTop={'50rem'} bg={'#fff'}>
                <Text fontSize={'5xl'} marginBottom={'2rem'}>＜Article＞</Text>
                <Flex flexWrap={'wrap'} w={'100rem'} boxShadow={'dark-lg'} gap={'4rem'} justifyContent={'center'} alignItems={'start'} paddingY={'4rem'}>
                    {
                        posts.map((post: any) => (
                            <Link href={post.slug} key={post.slug} _hover={{ opacity: 0.6 }}>
                                <Image src={post.visual} alt={post.title} />
                                <Text fontSize={'3xl'} marginTop={'2rem'}>{post.title}</Text>
                            </Link>
                        ))
                    }
                </Flex>
                <Button
                    w={'20rem'}
                    h={'4rem'}
                    color={'#fff'}
                    fontWeight={'bold'}
                    marginTop={'3rem'}
                    bgGradient={'linear(to-l,blue.200,purple.200)'}
                    _hover={{ bgGradient: 'linear(purple.400,blue.400)' }}
                >SHOW MORE</Button>
            </Flex>
        </>
    )
}

export default Article