import './App.css';
import React,{useState} from 'react';
import ListComp from './ListComp';
function App() {
  const [state, setstate] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  console.log(edit);
  const fn=(e)=>{
    setstate(e.target.value);
  }
  const addComp=()=>{
    if(state===""){
      return;
    }
    setData((preValue)=>{
      return [...preValue,state]
    })
    setstate("");
  }
  const deleteVal=(key)=>{
    setData((oldItems)=>{
      return oldItems.filter((val,idx)=>{
        return idx!==key
      })
    })
  }
  return (
    <div className="App" id="mn">
      <div className='heading'>
        <p id="para">ToDo List</p>
      </div>
      <div className='additm'>
        <input type="text" placeholder='Add a Item' id="inpt" value={state} onChange={fn}/>
        <button id="btn" onClick={addComp}>+</button>
      </div>
      {data.map((item,idx)=>{
        return <ListComp value={item} key={idx} id={idx} onSelect={deleteVal} setEdt={setEdit} edt={edit}/>
      })}
    </div>
  );
}

export default App;
