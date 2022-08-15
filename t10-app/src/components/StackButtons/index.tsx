import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";

interface IStackButtons{
    current_page: number | undefined,
    first_page_url: string | undefined, 
    from: number | undefined ,
    last_page: string | undefined,
    last_page_url: string | undefined,
    links:{
        active: boolean,
        label: string,
        url: string
    }[] | undefined,
    next_page_url: string | undefined,
    per_page: number| undefined,
    setPagina( valor: string):void
}


export default function StackButtons(props:IStackButtons){
    return(
        
        <Stack direction='row' spacing={4}>
            <Button  colorScheme='teal' variant='solid'>
                <ArrowLeftIcon/>
            </Button>
            {props?.links?.map(link => (
                
                <Button  colorScheme='teal' variant='solid' key={link.label} onClick={() =>props.setPagina(link?.url)}>
                    {link.label}
                </Button>
            
            ))}
            <Button colorScheme='teal' variant='solid'>
                <ArrowRightIcon/>
            </Button>
        </Stack>
        
    );
}