import React, {useState} from 'react'
import tube from "../../assets/you.png"
import { BiUser } from 'react-icons/bi';
import { RxLockClosed } from 'react-icons/rx';


function ListVideo({onSubmit}) {
const [ searchTerm, setSearchTerm] = useState("")
const handleChange = (event) => setSearchTerm(event.target.value);

const onkeyPress = (event) => {
    if (event.key === "Enter") {
         onSubmit(searchTerm);
    }
}
 
  return (
    <div >
        <div className="header">
            <a href="/" className='brand'>
                <img src={tube} alt="" className='logoBrand'/>
            </a>
            <input type="text"
            fullWidth
            placeholder='Search...'
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onkeyPress}
            />

            <div className="icons">
                <h2><BiUser/></h2>
                <h2><RxLockClosed/></h2>
            </div>
        </div>
    </div>
  )
}

export default ListVideo