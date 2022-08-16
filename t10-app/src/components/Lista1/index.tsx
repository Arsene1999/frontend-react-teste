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

export default function Lista1(){

    const [listaFatos, setListaFatos] = useState<IDataLista1>();
    const [tamanhoFato, setTamanhoFato] = useState("");
    const [flag, setFlag] = useState(false);

    function handleFactSearch(){
        api.get(`https://catfact.ninja/fact?max_length=${tamanhoFato}`)
            .then(response => {
                setListaFatos(response.data);
                console.log(response);
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
                    <Fatos1 fact={listaFatos?.fact} lenght={listaFatos?.lenght}/>
                )
            }      
        </Grid>
    
    );
}