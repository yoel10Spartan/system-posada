import { Box, Button, Flex, Image, Input, InputGroup, Select, Text } from '@chakra-ui/react'
import React from 'react'
import image from '../assets/banner.png'

const Home = () => {

    const generateValues = () => {
        const val = []
        for(let i = 1; i <= 50; i++){
            val.push(i)
        }
        return val
    }

    return (
        <Flex
            justifyContent='center'
            >
            <Box
                w='800px'
                position='relative'
                backgroundImage={image}
            >
                {/* <Image 
                    src={image} 
                /> */}
                <Box
                    position='absolute'
                    top={['0', '30', '50', '90']}
                    left='50'
                    right='50'
                >
                    <Text
                        w='100%'
                        textAlign='center'
                        fontWeight='800'
                        fontSize='3xl'
                    >
                        ¡REGISTRATE PARA ASISTIR!
                    </Text>
                </Box>
                <Box
                    position='absolute'
                    top={['500', '600', '800', '900', '900', '900']}
                    left='5'
                    right='5'
                    bottom='0'
                >
                    <Box
                        background='rgba(0, 0, 0, .25)'
                        backdrop-filter='blur(5px)'
                        borderRadius='30px'
                        color='#fff'
                        textShadow='black 0.1em 0.1em 0.2em'
                        padding='20px'
                    >
                        <Text
                            textAlign='center'
                            fontSize='20px'
                        >
                            Por favor completa el formulario y haz click en el boton de REGISTRATE
                        </Text>
                        <form>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Nombre (s)*' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Apellido paterno *' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Apellido materno *' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='No. Colaborador *' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Correo electronico *' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Telefono movil *' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Telefono fijo' 
                                    background='white'
                                />
                            </InputGroup>
                            <Select 
                                placeholder='Marca'
                                mt='20px'
                                background='white'
                                color={'#000'}
                            >
                                <option value='1'>Empresa Aries</option>
                                <option value='2'>Swiss Hospital</option>
                                <option value='3'>Colegio Alfonsino</option>
                                <option value='4'>Aries Capital</option>
                                <option value='5'>Laboratorio region norte</option>
                                <option value='6'>Laboratorio region centro</option>
                                <option value='7'>Staff region norte</option>
                                <option value='8'>Staff region centro</option>
                                <option value='9'>Call center</option>
                                <option value='10'>Swisslab</option>
                                <option value='11'>Azteca</option>
                                <option value='12'>Olab</option>
                                <option value='13'>Jenner</option>
                                <option value='14'>Dr. Moreira</option>
                                <option value='15'>Liacsa</option>
                                <option value='16'>Biomedica</option>
                                <option value='17'>Exacta</option>
                                <option value='18'>Lister</option>
                                <option value='19'>ProMedic</option>
                                <option value='20'>Asesores</option>
                                <option value='21'>FamilyLabs</option>
                                <option value='22'>Polab</option>
                            </Select>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Puesto' 
                                    background='white'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Sucursal o area' 
                                    background='white'
                                />
                            </InputGroup>
                            <Select 
                                placeholder='Ubicacion'
                                mt='20px'
                                background='white'
                                color={'#000'}
                            >
                                <option value='1'>CDMX</option>
                                <option value='2'>Estado de Mexico</option>
                                <option value='3'>Nuevo Leon</option>
                                <option value='4'>Puebla</option>
                                <option value='5'>Coahuila</option>
                                <option value='6'>Chihuahua</option>
                                <option value='7'>Tamaulipas</option>
                                <option value='8'>Veracruz</option>
                                <option value='9'>San Luis Potosi</option>
                                <option value='10'>Tlaxcala</option>
                                <option value='12'>Morelos</option>
                                <option value='12'>Oaxaca</option>
                                <option value='13'>Chiapas</option>
                            </Select>
                            <Select 
                                placeholder='¿Cuantos años llevas en la empresa?'
                                mt='20px'
                                background='white'
                                color={'#000'}
                            >
                                {
                                    generateValues().map(i => (
                                        <option value={i}>{i}</option>
                                    ))
                                }
                            </Select>

                            <Button 
                                colorScheme='teal' 
                                variant='solid'
                                w='100%'
                                mt='20px'
                            >
                                Enviar
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Home