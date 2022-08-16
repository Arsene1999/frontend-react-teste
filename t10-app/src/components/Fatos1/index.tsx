import { Stack, Button, Box, Grid, useMediaQuery } from "@chakra-ui/react";


interface IFatos{
    fact: string | undefined,
    lenght: number | undefined
}

export default function Fatos1({fact,lenght}: IFatos){
    
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

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
                    <Button maxWidth="100px" my={2} colorScheme='teal' >
                    Adicionar
                    </Button>
                </Stack>
            </Box>
    );
}