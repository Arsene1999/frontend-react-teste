import * as React from "react"
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
import { ColorModeSwitcher } from "../ColorModeSwitcher";


export default function App(){

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
                <p>Lista 1</p>
              </TabPanel>
              <TabPanel>
                <p>Lista 2</p>
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