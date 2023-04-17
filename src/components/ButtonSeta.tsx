import {useState} from 'react'
import {ArrowDropDown} from '@mui/icons-material';
import {ArrowDropUp} from '@mui/icons-material';

export default function ButtonSeta(){
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = ()=>{
        setIsOpen(!isOpen)
    
    }

    return(

    <button onClick={handleClick}>
      {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
    </button>
    )

}