import { Stack, Button, Box, Grid, useMediaQuery } from "@chakra-ui/react";


interface IDataLista1{
    fact: string,
    lenght: number
}
interface IFatos{
    fact: string,
    lenght: number,
    handleAddFato(novoItem: IDataLista1): void,
    addOn: boolean,
}

export default function Fatos1({fact, lenght, handleAddFato, addOn}: IFatos){
    

    return (        
            <Box
                p={4}
                display={{ md: "flex" }}
                maxWidth="auto"
                borderWidth={1}
                borderRadius='8px'
                margin={2}
                >
                
                <Stack
                    align={{ base: "center", md: "stretch" }}
                    textAlign={{ base: "center", md: "left" }}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                >
                    <p color="gray.500">
                    {fact}
                    </p>
                    {addOn && 
                        (
                            <Button 
                                maxWidth="100px" 
                                my={2} 
                                colorScheme='teal' 
                                onClick={() =>
                                    {handleAddFato(
                                        {
                                            fact,
                                            lenght
                                        }  
                                    )
                                }}
                            >
                                Adicionar
                            </Button>
                        )
                    }
                    
                </Stack>
            </Box>
    );
}