import { Box, Flex, Text } from '@chakra-ui/react'
import style from '@/styles/mainbijual.module.scss'

export default function MainBijual() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'95vh'}
                bgGradient={'linear(to-tl,blue.200,purple.200)'}
                position={'relative'}>
                <Text
                    w={'30%'}
                    h={'95vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    fontSize={'7xl'}
                    position={'absolute'}
                    top={0}
                    left={'15rem'}
                    fontWeight={'extrabold'}
                >さらにもっと自分を。</Text>
                <Box
                    w={'70%'}
                    h={'95vh'}
                >
                </Box>
            </Flex>
        </>
    )
}