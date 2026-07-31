import { observer } from 'mobx-react'
import {
    Box,
    Button,
    Text,
} from '@chakra-ui/react'
import FieldRow from './components/FieldRow.js'
import AppStore from './stores/appStore.js'
import { useMemo } from 'react'


function App() {
    const appStore = useMemo(() => new AppStore(), [])
    const userEmail = appStore.getUserEmail()
    const productId = appStore.getProductId()
    const productName = appStore.getProductName()
    const productPrice = appStore.getProductPrice()

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
            <Box width="480px" p={8}>
                {/* USER section */}
                <Text fontSize="sm" fontWeight="medium" color="gray.600" letterSpacing="0.05em" mb={4}>
                    USER
                </Text>

                <FieldRow
                    label="Email"
                    value={userEmail}
                    placeholder='Enter email'
                    onChange={appStore.setUserEmail}
                />
                <Text fontSize="xs" color="gray.400" mb={6}>
                    Profile email on the platform. Products will be linked to this profile.
                </Text>

                {/* Divider */}
                <Box height="1px" bg="gray.200" mb={6} />

                {/* PRODUCT section */}
                <Text fontSize="sm" fontWeight="medium" color="gray.600" letterSpacing="0.05em" mb={4}>
                    PRODUCT
                </Text>

                <FieldRow
                    label="ID"
                    placeholder='Enter id'
                    value={productId}
                    onChange={appStore.setProductId}
                />
                <FieldRow
                    label="Name"
                    placeholder='Enter name'
                    value={productName}
                    onChange={appStore.setProductName}
                />
                <FieldRow
                    label="Price"
                    placeholder='Enter price'
                    value={productPrice}
                    onChange={appStore.setProductPrice}
                />

                {/* Spacer */}
                <Box height="40px" />

                {/* Action button */}
                <Button
                    width="100%"
                    bg="gray.100"
                    color="gray.500"
                    _hover={{ bg: 'gray.200' }}
                    onClick={appStore.sendAddToCart}
                >
                    Send add_to_cart
                </Button>
                <Box height="10px" />
                <Button
                    width="100%"
                    bg="gray.100"
                    color="gray.500"
                    _hover={{ bg: 'gray.200' }}
                    onClick={appStore.reset}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

export default observer(App)
