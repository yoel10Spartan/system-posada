import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const App = () => {
    return (
        <ChakraProvider>
            <Home />
        </ChakraProvider>
    )
}

export default App