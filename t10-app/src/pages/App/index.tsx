import * as React from "react"
import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

import Lista1 from "../../components/Lista1";
import Lista2 from "../../components/Lista2";
import api from "../../services/api";


interface IDataLista1{
  fact: string,
  lenght: number
}

export default function App(){
  
  const [guardalista1, setGuardaLista1] = useState<IDataLista1[]>([]);
  const [guardalista2, setGuardaLista2] = useState<IDataLista1[]>([]);
  
  function handleAddFato(novoItem : IDataLista1){
      setGuardaLista1([...guardalista1, novoItem]);
  }

  function handleAddFato2(novoItem : IDataLista1){
    setGuardaLista2([...guardalista2, novoItem]);
}

  return(
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} templateRows={'50px 1fr'}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab>
                <Text fontSize='2xl' style={{paddingRight:'1rem'}}>Lista 1</Text>  
              </Tab>
              <Tab>
                <Text fontSize='2xl' style={{paddingRight:'1rem'}}>Lista 2</Text>  
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Lista1 
                  guardalista1={guardalista1!} 
                  handleAddFato={handleAddFato}
                />
              </TabPanel>
              <TabPanel>
                <Lista2 
                  handleAddFato={handleAddFato2}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

/*
<VStack spacing={8}>
          
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
*/