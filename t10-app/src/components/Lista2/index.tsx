import { Grid, useMediaQuery, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Fatos1 from "../Fatos1";
import InputBusca1 from "../InputBusca1";
import InputBusca2 from "../InputBusca2";
import Novosfatos from "../NovosFatos";
import StackButtons from "../StackButtons";

interface IDataLista1{
    fact: string,
    lenght: number
}
interface ILista2{
    handleAddFato(novoItem: IDataLista1): void,
    guardalista2: IDataLista1[]
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


export default function Lista2({ handleAddFato, guardalista2 }: ILista2){
    const [novoFato, setNovoFato] = useState(false);
    const [listaFatos, setListaFatos] = useState<ICards>();
    const [requisicao, setRequisicao] = useState("https://catfact.ninja/facts");
    const [tamanhoFato, setTamanhoFato] = useState("");
    const [quantidadeFatos, setQuantidadeFatos] = useState("");
    const [flag, setFlag] = useState(false);
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    function handleFactSearch(){
        api.get(`${requisicao}?max_length=${tamanhoFato}&limit=${quantidadeFatos} `)
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

    function handleFactSearch2(response: string){
        api.get(`${response}&max_length=${tamanhoFato}&limit=${quantidadeFatos} `)
            .then(response => {
                setListaFatos(response.data);
                console.log(response);
            });
        setRequisicao(response);
        console.log(response);
    }

    return (
        <Grid  p={3}  gap={5}>

            <Novosfatos novoFato={novoFato} setNovoFato={() =>setNovoFato(!novoFato)}/>
            {novoFato && (
                <>
                    <Text fontSize='4xl' style={{paddingRight:'1rem'}}>Busca por Fatos</Text>
                    <InputBusca2 
                        tamanhoFato={tamanhoFato} 
                        setTamanhoFato={setTamanhoFato}
                        quantidadeFatos={quantidadeFatos}
                        setQuantidadeFatos={setQuantidadeFatos}
                        handleFactSearch={handleFactSearch}
                    />
                    <Grid templateColumns={isLargerThan1280 
                                                ? '1fr 1fr 1fr' 
                                                : isLargerThan600   ? '1fr 1fr' 
                                                : '1fr'}>
                        {listaFatos?.data.map((dados, index) => (
                            <>
                            <Fatos1
                                    key={index} 
                                    fact={dados.fact} 
                                    lenght={dados.lenght} 
                                    handleAddFato={handleAddFato}
                                    addOn={true}
                                    widthWanted={'auto'}
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
                        handleFactSearch2={handleFactSearch2}
                        />
                </>
            )}
            <Text fontSize='4xl' style={{paddingRight:'1rem'}}>Fatos Selecionados</Text>  
            <Grid templateColumns={isLargerThan1280 
                                        ? '1fr 1fr 1fr' 
                                        : isLargerThan600   ? '1fr 1fr' 
                                        : '1fr'}>

                {guardalista2.map( dados => (
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