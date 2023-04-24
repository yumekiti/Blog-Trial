import { Box, Flex, Text } from '@chakra-ui/react'

export default function Articl() {
    return (
        <>
            <Flex w={'100%'} h={'150rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                <Text></Text>
                <Flex flexWrap={'wrap'} w={'100rem'} h={'145rem'} bg={'#fff'} boxShadow={'dark-lg'} gap={'4rem'} justifyContent={'center'} alignItems={'center'}>
                    <Box>
                        <Box bg={'blue'} w={'40rem'} h={'30rem'}></Box>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Box bg={'blue'} w={'40rem'} h={'30rem'}></Box>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Box bg={'blue'} w={'40rem'} h={'30rem'}></Box>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Box bg={'blue'} w={'40rem'} h={'30rem'}></Box>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Box bg={'blue'} w={'40rem'} h={'30rem'}></Box>
                        <Text>HTMLについて</Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}