import React from 'react';
import './App.css';
const ListComp = (props) => {
    return (
        <div className='mainDv'>
            <button className='button' onClick={()=>{props.onSelect(props.id)}}>X</button>
            {/* <button className='button' onClick={()=>{props.setEdt(!(props.edt))}}> E</button> */}
           {/* {props.edit ?<input type="text" />:<p className='paragraph'>{props.value}</p>} */}
           <p className='paragraph'>{props.value}</p>
        </div>
    );
}

export default ListComp;
