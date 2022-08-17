import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface INovoFato{
    novoFato: boolean,
    setNovoFato(): void
}


export default function Novosfatos({novoFato, setNovoFato}: INovoFato){
    return (
        <div style={{display:'flex',justifyContent: 'end'}}>
               
                <Button 
                    leftIcon={novoFato ? <CloseIcon  /> : <AddIcon/>} 
                    colorScheme={novoFato ? 'red' : 'teal'}
                    variant='solid'
                    maxWidth='300px'
                    onClick={setNovoFato}
                    fontSize='1xl' 
                >
                    {novoFato ? <>Fechar</> : <>Novos Fatos</>}
                </Button>    
                
                
            </div>
    );
}