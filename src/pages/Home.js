import { Box, Button, Flex, Image, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form";
import logo from '../assets/logo.png'
import esfera from '../assets/esferas_gda.png'
import axios from 'axios';
import {location as loc, mark} from '../utils/items'

const Home = () => {

    const captchaRef = useRef(null)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [location, setLocation] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    const [load, setLoad] = useState(false);

    const setValuesFun = (e) => {
        if(e.target.value === '14' && e.target.name === 'location'){
            setLocation(true)
        }else if(e.target.value !== '14' && e.target.name === 'location'){
            setLocation(false)
        }
    }

    const handleSend =  async (data) => {
        const token = captchaRef.current.getValue();
        if(!token){return}

        
        if(data.location2){
            delete data.location
            data['location'] = data['location2']
            delete data.location2
        } else {
            data['location'] = loc[data['location']]
        }
        
        data['mark'] = mark[data['mark']]
        
        for(let i of Object.keys(data)){
            data[i] = data[i]?.toUpperCase()
        }

        setLoad(true);
        const res = await axios.post('https://posadafemeg.xyz/api/posada/', data);
        if(res.data.id){
            onOpen();
            reset();
        }
        setLoad(false);

        captchaRef.current.reset();
    }

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
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                w='100%'
                background='linear-gradient(to bottom, #FFFF, #FED975)'
            >
                <Box
                    margin='0 20px'
                >
                    <Text
                        w='100%'
                        textAlign='center'
                        fontWeight='800'
                        fontSize='3xl'
                        marginTop='30px'
                        color='#380106'
                    >
                        ??REG??STRATE PARA VIVIR LA FIESTA M??S EMOCIONANTE DEL A??O!
                    </Text>
                </Box>
                <Image
                     
                    src={logo} 
                    w='300px'
                    h='335px'
                    margin='40px'
                />
                <Box
                    w='100%'
                >
                    <Box
                        background='rgba(35, 155, 86)'
                        backdrop-filter='blur(5px)'
                        borderRadius='30px'
                        padding='20px'
                        margin={['20px 20px', '20px 50px']}
                        >
                        <Text
                            color='#FFF'
                            textAlign='center'
                            fontSize='20px'
                        >
                            Por favor completa el formulario y se parte de la POSADA EMPRESAS ARIES 2022.
                        </Text>
                        <Text
                            color='#FFF'
                            textAlign='center'
                            fontSize='15px'
                            marginTop='5px'
                        >
                            * Campo obligatorio
                        </Text>
                        <form onChange={setValuesFun} onSubmit={handleSubmit(handleSend)}>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Nombre (s)*' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("name", { required: true })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Apellido paterno *' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("lastname1", { required: true })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Apellido materno *' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("lastname2", { required: true })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='No. Colaborador *' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("contributor", { required: true })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Correo electr??nico *' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("email", { required: true })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Confirmaci??n de correo electr??nico *' 
                                    background='white'
                                    textTransform='uppercase'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Tel??fono m??vil *' 
                                    background='white'
                                    {...register("numberPhone", { required: true })}
                                    textTransform='uppercase'
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Otro Tel??fono *' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("numberPhoneFijo", { required: true })}
                                />
                            </InputGroup>
                            <Select 
                                placeholder='Marca'
                                mt='20px'
                                background='white'
                                color={'#000'}
                                textTransform='uppercase'
                                {...register("mark", { required: true })}
                            >
                                <option value='1'>Empresas Aries</option>
                                <option value='2'>Swiss Hospital</option>
                                <option value='3'>Colegio Alfonsino</option>
                                <option value='4'>Aries Capital</option>
                                <option value='5'>Laboratorio GDA Regi??n Norte</option>
                                <option value='6'>Laboratorio GDA Regi??n Centro</option>
                                <option value='7'>Staff GDA Regi??n Norte</option>
                                <option value='8'>Staff GDA Regi??n Centro</option>
                                <option value='9'>Call center GDA</option>
                                <option value='10'>Swisslab</option>
                                <option value='11'>Azteca</option>
                                <option value='12'>Olab</option>
                                <option value='13'>Jenner</option>
                                <option value='14'>Dr. Moreira</option>
                                <option value='15'>Liacsa</option>
                                <option value='16'>Biom??dica</option>
                                <option value='17'>Exakta</option>
                                <option value='18'>Lister</option>
                                <option value='19'>ProMedic</option>
                                <option value='20'>Asesores Diagn??stico</option>
                                <option value='21'>FamilyLabs</option>
                                <option value='22'>Polab</option>
                            </Select>
                            <InputGroup>
                                <Input
                                    textTransform='uppercase'
                                    mt='20px'
                                    type='text'  
                                    placeholder='Puesto *' 
                                    background='white'
                                    {...register("position", { required: true })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Sucursal o ??rea *' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("area", { required: true })}
                                />
                            </InputGroup>
                            <Select 
                                placeholder='Ubicaci??n'
                                mt='20px'
                                background='white'
                                color={'#000'}
                                textTransform='uppercase'
                                {...register("location", { required: true })}
                            >
                                <option value='1'>CDMX</option>
                                <option value='2'>Estado de M??xico</option>
                                <option value='3'>Nuevo Le??n</option>
                                <option value='4'>Puebla</option>
                                <option value='5'>Coahuila</option>
                                <option value='6'>Chihuahua</option>
                                <option value='7'>Tamaulipas</option>
                                <option value='8'>Veracruz</option>
                                <option value='9'>San Luis Potos??</option>
                                <option value='10'>Tlaxcala</option>
                                <option value='11'>Morelos</option>
                                <option value='12'>Oaxaca</option>
                                <option value='13'>Chiapas</option>
                                <option value='14'>Otro</option>
                            </Select>
                            {
                                location && <Input
                                    mt='20px'
                                    type='text'  
                                    placeholder='Ubicaci??n' 
                                    background='white'
                                    textTransform='uppercase'
                                    {...register("location2")}
                                />
                            }
                            <Select 
                                placeholder='??Cu??ntos a??os llevas en la empresa?'
                                mt='20px'
                                background='white'
                                color={'#000'}
                                textTransform='uppercase'
                                {...register("years", { required: true })}
                            >
                                {
                                    generateValues().map(i => (
                                        <option value={i}>{i}</option>
                                    ))
                                }
                            </Select>

                            <Box
                                padding='10px'
                                w='100%'
                                display='flex'
                                justifyContent='center'
                            >
                                <ReCAPTCHA 
                                    sitekey={'6Ld6xp4iAAAAANlK_vbgcMK4Z3z-g-iaryAI2Ded'}
                                    ref={captchaRef}
                                />
                            </Box>

                            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader color='#380106'>REGISTRO EXITOSO</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody
                                        textAlign='center'
                                        color='#380106'
                                    >
                                        Tus datos se han enviado de forma correcta,
                                        en unos minutos recibir??s un mail de confirmaci??n.
                                        <br/>
                                        Por favor revisa tu Bandeja
                                        de Entrada, en caso de no estar ah??, revisa en SPAM.
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button background='#380106' color='#fff' mr={3} onClick={onClose}>
                                            Aceptar
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>

                            <Button 
                                colorScheme='teal' 
                                variant='solid'
                                w='100%'
                                mt='20px'
                                background='#380106'
                                type='submit'
                                isLoading={load}
                            >
                                REG??STRATE
                            </Button>
                        </form>
                    </Box>
                </Box>
                <Image   
                    src={esfera} 
                    w='100vw'
                />
            </Box>
        </Flex>
    )
}

export default Home

// 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

// 6Ld6xp4iAAAAANlK_vbgcMK4Z3z-g-iaryAI2Ded

// 6Ld6xp4iAAAAANd4IjAcRk3iJWE_jXpgXIEPnjAM