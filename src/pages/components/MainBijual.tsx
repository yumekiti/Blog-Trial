import { Box, Flex, Text } from '@chakra-ui/react'
import style from '@/styles/mainbijual.module.scss'

export default function MainBijual() {
    return (
        <>
            <Flex w={'100%'} h={'92vh'} marginTop={'8vh'} position={'relative'}>
                <Text
                    w={'20%'}
                    h={'92vh'}
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
                    w={'80%'}
                    h={'92vh'}
                    marginLeft={'20%'}
                    bgGradient={'linear(to-tl,blue.200,purple.200)'}
                ></Box>
            </Flex>
        </>
    )
}