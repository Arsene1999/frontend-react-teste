import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Link, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import StackButtons from "../StackButtons";

interface ILista1{
    pagina: string,
    setPagina( valor: string):void
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

export default function Lista1({pagina,setPagina}: ILista1){

    const [listaFatos, setListaFatos] = useState<ICards>();

    useEffect(() => {
        api.get(`${pagina}`)
                        .then(response => { 
                            setListaFatos(response.data);
                            console.log(listaFatos);
                        });
      },[pagina]);


    return (
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
    );
}