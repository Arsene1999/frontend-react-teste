import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, Input, InputGroup, InputRightElement, Link, Stack, Text, useBoolean, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Fatos1 from "../Fatos1";
import InputBusca1 from "../InputBusca1";
import StackButtons from "../StackButtons";

interface IDataLista1{
    fact: string,
    lenght: number
}
interface ILista1{
    guardalista1: IDataLista1[],
    handleAddFato(novoItem: IDataLista1): void
}



export default function Lista1({guardalista1,handleAddFato}: ILista1){
    
    const [listaFatos, setListaFatos] = useState<IDataLista1>();
    const [tamanhoFato, setTamanhoFato] = useState("");
    const [flag, setFlag] = useState(false);
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    function handleFactSearch(){
        api.get(`https://catfact.ninja/fact?max_length=${tamanhoFato}`)
            .then(response => {
                setListaFatos(response.data);
                //console.log(response);
                if(response.data.length > 0){
                    setFlag(true);
                }else{
                    setFlag(false);
                }
                
            });
    }
   

    return (
        
        <Grid  p={3}  gap={5}>
            <InputBusca1 
                tamanhoFato={tamanhoFato} 
                setTamanhoFato={setTamanhoFato}
                handleFactSearch={handleFactSearch}
                />
          
            {flag && 
                (
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Fatos1 
                            fact={listaFatos?.fact!} 
                            lenght={listaFatos?.lenght!} 
                            handleAddFato={handleAddFato}
                            addOn={true}
                            widthWanted={'600px'}
                        />
                    </div>
                )
            }  
            
            
            <Text fontSize='4xl' style={{paddingRight:'1rem'}}>Fatos Selecionados</Text>  
            <Grid templateColumns={isLargerThan1280 
                                            ? '1fr 1fr 1fr' 
                                            : isLargerThan600   ? '1fr 1fr' 
                                                                : '1fr'}>
            {guardalista1.map( dados => (
                        <>
                            <Fatos1 
                                fact={dados.fact} 
                                lenght={dados.lenght} 
                                handleAddFato={handleAddFato}
                                addOn={false}
                                widthWanted={'auto'}
                            />
                        </>
                    ))}
            </Grid>

                
        </Grid>
    
    );
}