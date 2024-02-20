import React, {useState} from 'react' 
import './App.css';
import Header from './components/Header';
import Alert from './components/Alert';
 
 
 
let name="Hassan";
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type,
    })
  }
  return (
    <>
     <div className="new">
      Hello! {name}
     </div>
     <Header showAlert={showAlert}/>
     <Alert alert={alert}/>
        
       </>
  );
}

export default App;
