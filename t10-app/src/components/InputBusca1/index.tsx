import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, Button, Text, Grid, Box, Flex } from "@chakra-ui/react";

interface IInputBusca1{
    tamanhoFato: string,
    setTamanhoFato(valor: string): void,
    handleFactSearch(): void
}

export default function InputBusca1({
                                tamanhoFato, 
                                setTamanhoFato,
                                handleFactSearch
                                    }: IInputBusca1){
    
    return (
        <>
            <Text fontSize='4xl' style={{paddingRight:'1rem'}}>Busca por Fatos</Text>
            <Flex justify='center' align='center' width='auto' p={5}>
                <InputGroup size='lg' maxWidth='600px'>
                            
                    <Input
                        type="number"
                        pr='4.5rem'
                        placeholder='Tamanho do fato'
                        value={tamanhoFato}
                        onChange={(event) => {setTamanhoFato(event.target.value)}}
                    />
                            
                    <InputRightElement width='6.5rem'>
                        <Button     	
                            colorScheme='teal' 
                            size='lg'
                            onClick={handleFactSearch}
                            leftIcon={<SearchIcon />}
                            >
                            Buscar  
                        </Button>
                    </InputRightElement>
                </InputGroup> 
            </Flex>  
        </>
    );
}