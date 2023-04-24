import { Box, Flex, Text } from '@chakra-ui/react'

export default function Articl() {
    return (
        <>
            <Flex w={'100%'} h={'150rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} marginTop={'40rem'}>
                <Text fontSize={'5xl'} marginBottom={'2rem'}>＜Articl＞</Text>
                <Flex flexWrap={'wrap'} w={'100rem'} h={'145rem'} bg={'#fff'} boxShadow={'dark-lg'} gap={'4rem'} justifyContent={'center'} alignItems={'center'}>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text>HTMLについて</Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}