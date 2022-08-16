import { Grid, useMediaQuery, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Fatos1 from "../Fatos1";
import InputBusca1 from "../InputBusca1";
import StackButtons from "../StackButtons";

interface IDataLista1{
    fact: string,
    lenght: number
}
interface ILista2{
    pagina: string,
    setPagina( valor: string):void,
    handleAddFato(novoItem: IDataLista1): void
}

interface ICards{
    current_page: number,
    data:{
      fact: string,
      lenght: number
    }[],
    first_page_url: string,
    from: number,
    last_page: string,
    last_page_url: string,
    links:{
        active: boolean,
        label: string,
        url: string
    }[],
    next_page_url: string,
    per_page: number
}


export default function Lista2({pagina,setPagina, handleAddFato}: ILista2){
    
    const [listaFatos, setListaFatos] = useState<ICards>();
    const [tamanhoFato, setTamanhoFato] = useState(0);
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    useEffect(() => {
        api.get(`${pagina}`)
                        .then(response => { 
                            setListaFatos(response.data);
                            console.log(listaFatos);
                        });
      },[pagina]);

    
    
    return (
        <Grid  p={3}  gap={5}>
                <Text fontSize='5xl'>Fatos</Text>
                <Grid templateColumns={isLargerThan1280 
                                            ? '1fr 1fr 1fr' 
                                            : isLargerThan600   ? '1fr 1fr' 
                                                                : '1fr'}>
                    {listaFatos?.data.map( dados => (
                        <>
                           <Fatos1 
                                fact={dados.fact} 
                                lenght={dados.lenght} 
                                handleAddFato={handleAddFato}
                                addOn={true}
                            />
                        </>
                    ))}
                    
                </Grid>
                
                <StackButtons 
                    current_page={listaFatos?.current_page} 
                    first_page_url={listaFatos?.first_page_url} 
                    from={listaFatos?.from} 
                    last_page={listaFatos?.last_page} 
                    last_page_url={listaFatos?.last_page_url} 
                    links={listaFatos?.links} 
                    next_page_url={listaFatos?.next_page_url} 
                    per_page={listaFatos?.per_page}
                    setPagina={setPagina} 
                    />
            </Grid>
    );
}