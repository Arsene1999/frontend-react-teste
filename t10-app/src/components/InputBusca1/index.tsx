import { InputGroup, Input, InputRightElement, Button, Text } from "@chakra-ui/react";

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
        <div style={{   
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap:'wrap'
                }}
            >
            <Text fontSize='4xl' style={{paddingRight:'1rem'}}>Busca por Fatos</Text>
            <InputGroup size='lg' maxWidth='600px'>
                        
                <Input
                    type="number"
                    pr='4.5rem'
                    placeholder='Tamanho do fato'
                    value={tamanhoFato}
                    onChange={(event) => {setTamanhoFato(event.target.value)}}
                />
                        
                <InputRightElement width='4.5rem'>
                    <Button     	
                        colorScheme='teal' 
                        size='lg'
                        onClick={handleFactSearch}
                        >
                        Buscar  
                    </Button>
                </InputRightElement>
            </InputGroup>   
        </div>
    );
}