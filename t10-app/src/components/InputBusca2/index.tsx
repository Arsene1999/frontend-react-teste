import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, Button, Text, Box, Grid, useMediaQuery } from "@chakra-ui/react";

interface IInputBusca2{
    tamanhoFato: string,
    setTamanhoFato(valor: string): void,
    quantidadeFatos: string,
    setQuantidadeFatos(valor: string): void,
    handleFactSearch(): void
}

export default function InputBusca2({
                                tamanhoFato, 
                                setTamanhoFato,
                                quantidadeFatos,
                                setQuantidadeFatos,
                                handleFactSearch
                                    }: IInputBusca2){

    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
                                    
    
    return (
        <>
            
            <Text fontSize='4xl' style={{paddingRight:'1rem'}}>Busca por Fatos</Text>
            <Grid 
                templateColumns={isLargerThan600   ? '1fr 1fr' : '1fr'}
                gap={3}
                >
            <InputGroup size='lg' >           
                <Input
                    type="number"
                    pr='4.5rem'
                    placeholder='Tamanho do fato'
                    value={tamanhoFato}
                    onChange={(event) => {setTamanhoFato(event.target.value)}}
                />
            </InputGroup>  
            <InputGroup size='lg' >        
                <Input
                    type="number"
                    pr='4.5rem'
                    placeholder='Quantidade de fatos'
                    value={quantidadeFatos}
                    onChange={(event) => {setQuantidadeFatos(event.target.value)}}
                />            
            </InputGroup>
</Grid>
            <Button     
                width='100%'
                leftIcon={<SearchIcon />} 
                colorScheme='teal' 
                size='lg'
                onClick={handleFactSearch}
            >
                Buscar  
            </Button>
            
        </>
    );
}