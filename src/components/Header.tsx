import { Link, Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Header() {

    const router = useRouter()

    return (
        <>
            <Box as='header'>
                <Flex w={'100%'}>
                    <Link
                        href={'/'}
                        fontSize={{ base: '4xl', lg: '6xl' }}
                        w={'50%'}
                        paddingLeft={'10rem'}
                        fontWeight={'extrabold'}
                        display={'flex'}
                        alignItems={'center'}
                    >ECC Blog</Link>
                    <UnorderedList
                        w={'50%'}
                        h={'8vh'}
                        display={'flex'}
                        listStyleType={'none'}
                        justifyContent={'space-around'}
                        padding={'2rem'}
                        fontWeight={'bold'}
                        alignItems={'center'}
                    >
                        <ListItem
                            _hover={{ textDecoration: 'underline' }}
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                            fontSize={{ base: '2xl', lg: '3xl' }}
                        >Profile</ListItem>
                        <ListItem
                            _hover={{ textDecoration: 'underline' }}
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                            fontSize={{ base: '2xl', lg: '3xl' }}
                        >Article</ListItem>
                        <ListItem
                            _hover={{ textDecoration: 'underline' }}
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                            fontSize={{ base: '2xl', lg: '3xl' }}
                        >Mail</ListItem>
                    </UnorderedList>
                </Flex>
            </Box>
        </>
    )
}