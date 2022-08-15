import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Center, Stack, Wrap, WrapItem } from "@chakra-ui/react";

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
        
        <Wrap  direction='row' spacing={4} display='flex' justifyContent='center'>
            
            {props?.links?.map(link => (
                <WrapItem>
                    <Center>
                        <Button     	
                            colorScheme='teal' 
                            variant={link.active ? 'solid' : 'outline'} 
                            key={link.label} 
                            onClick={() =>props.setPagina(link?.url)}
                        >
                            {link.label}
                        </Button>
                    </Center>
                    
                </WrapItem>
            ))}
            
        </Wrap >
        
    );
}