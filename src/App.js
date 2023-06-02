import './App.css';
import axios from 'axios'
import Main from './Components/Main';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Details from './Components/Details';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const value = axios.get("https://api.tvmaze.com/search/shows?q=all").then((e)=>{
      console.log(e)
      setData(e.data);
  })
  },[])

  return (
    // <div className="App">
    //   <Main data={data}/>
    // </div>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main data={data}/>}/>
        <Route path='/details' element={<Details data={data}/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
