import { Stack, Button, Box, Grid } from "@chakra-ui/react";


interface IFatos{
    data:{
        fact: string,
        lenght: number
      }[] | undefined,
}

export default function Fatos1({data}:IFatos){
    
    return (
        <Grid >
            {data?.map( dados => (
                    
                <Box
                p={4}
                display={{ md: "flex" }}
                maxWidth="32rem"
                borderWidth={1}
                margin={2}
                key={dados.fact}
                >
                
                <Stack
                    align={{ base: "center", md: "stretch" }}
                    textAlign={{ base: "center", md: "left" }}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                >
                    <p color="gray.500">
                    {dados.fact}
                    </p>
                    <Button maxWidth="100px" my={2}>
                    Click me!
                    </Button>
                </Stack>
                </Box>
                    )
                )}
        </Grid >
    );
}