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

export default function App(){

  const [paginaLista2, setPaginaLista2]= useState("https://catfact.ninja/facts?max_length=30&limit=2");
  
  return(
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} templateRows={'50px 1fr'}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab>Lista 1 </Tab>
              <Tab>Lista 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Lista1 />
              </TabPanel>
              <TabPanel>
                <Lista2 pagina={paginaLista2} setPagina={setPaginaLista2}/>
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