import { InputGroup, Input, InputRightElement, Button, Text } from "@chakra-ui/react";

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
    
    return (
        <>
            <div style={{   
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap:'wrap'
                    }}
                >
                
                <InputGroup size='lg' maxWidth='300px'>
                            
                    <Input
                        type="number"
                        pr='4.5rem'
                        placeholder='Tamanho do fato'
                        value={tamanhoFato}
                        onChange={(event) => {setTamanhoFato(event.target.value)}}
                    />
                            
                    <InputRightElement width='4.5rem'>
                        
                    </InputRightElement>
                </InputGroup>
                
            
                
                <InputGroup size='lg' maxWidth='300px'>
                            
                    <Input
                        type="number"
                        pr='4.5rem'
                        placeholder='Quantidade de fatos'
                        value={quantidadeFatos}
                        onChange={(event) => {setQuantidadeFatos(event.target.value)}}
                    />
                            
                </InputGroup>

                <Button     
                            width='100%'
                            maxWidth='600px'	
                            colorScheme='teal' 
                            size='lg'
                            onClick={handleFactSearch}
                            >
                            Buscar  
                        </Button>
            </div>
        </>
    );
}