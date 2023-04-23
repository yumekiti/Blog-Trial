import { Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {

    const router = useRouter()

    return (
        <>
            <header>
                <Flex>
                    <Text>ECC Blog</Text>
                    <UnorderedList
                        display={'flex'}
                        listStyleType={'none'}
                        justifyContent={'space-around'}
                    >
                        <ListItem
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                        >Profile</ListItem>
                        <ListItem
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                        >article</ListItem>
                        <ListItem
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                        >Mail</ListItem>
                    </UnorderedList>
                </Flex>
            </header>
        </>
    )
}