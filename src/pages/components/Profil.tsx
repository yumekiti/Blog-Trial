import { Box, Flex, Text } from '@chakra-ui/react'

export default function Profil() {
    return (
        <>
            <Box w={'100%'} h={'50rem'}>
                <Flex>
                    <Box></Box>
                    <Box w={'50%'}>
                        <Text>
                            現在、ECCコンピュータ専門学校に通う、2年生。<br />
                            日々デザイン、フロントエンド、バックエンドについて勉強している。
                            この私のブログでは私が勉強したことや、気になったこと、手こずったことなどをまとめて、
                            他のわからない人のために記事にしてまとめています。
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}