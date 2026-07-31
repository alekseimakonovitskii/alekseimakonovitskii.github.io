import { Box, Button, Heading, Text } from '@chakra-ui/react'

function App() {
    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
            <Box textAlign="center">
                <Heading mb={4}>altcraft-product-list-test</Heading>
                <Text mb={6} color="gray.500">
                    React + Vite + Chakra UI
                </Text>
                <Button colorScheme="blue">It works</Button>
            </Box>
        </Box>
    )
}

export default App
