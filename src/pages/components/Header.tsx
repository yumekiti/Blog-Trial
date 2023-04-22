import { Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
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
                        <ListItem>
                            <Link href={'/'}>Profile</Link>
                        </ListItem>
                        <ListItem>
                            <Link href={'/'}>article</Link>
                        </ListItem>
                        <ListItem>
                            <Link href={'/'}>Mail</Link>
                        </ListItem>
                    </UnorderedList>
                </Flex>
            </header>
        </>
    )
}