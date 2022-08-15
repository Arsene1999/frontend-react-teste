import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";


export default function InputBusca1(){
    return (
        <div style={{display: 'flex',justifyContent: 'center'}}>
                    <InputGroup size='lg' maxWidth='600px'>
                        <Input
                            pr='4.5rem'
                            placeholder='Tamanho do fato'
                        />
                        
                        <InputRightElement width='4.5rem'>
                            <Button     	
                                colorScheme='teal' 
                                size='lg'
                            >
                            Buscar  
                            </Button>
                        </InputRightElement>
                    </InputGroup>   
                </div>
    );
}