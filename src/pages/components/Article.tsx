import { Box, Flex, Text, Button } from '@chakra-ui/react'

export default function Articl() {
    return (
        <>
            <Flex w={'100%'} h={'150rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} marginTop={'50rem'} bg={'#fff'}>
                <Text fontSize={'5xl'} marginBottom={'2rem'}>＜Articl＞</Text>
                <Flex flexWrap={'wrap'} w={'100rem'} h={'145rem'} boxShadow={'dark-lg'} gap={'4rem'} justifyContent={'center'} alignItems={'center'}>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text fontSize={'3xl'} marginTop={'2rem'}>HTMLについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text fontSize={'3xl'} marginTop={'2rem'}>CSSについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text fontSize={'3xl'} marginTop={'2rem'}>Sass/Scssについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text fontSize={'3xl'} marginTop={'2rem'}>JavaScriptについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text fontSize={'3xl'} marginTop={'2rem'}>TypeScriptについて</Text>
                    </Box>
                    <Box>
                        <Flex bg={'blue'} w={'40rem'} h={'30rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text color={'#fff'} fontSize={'9xl'}>img</Text>
                        </Flex>
                        <Text fontSize={'3xl'} marginTop={'2rem'}>React.jsについて</Text>
                    </Box>
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