import Counter from './components/Counter'
import logo from './logo.svg';
import './App.css';
import Comment from './Comments/Comment';

import{useEffect} from 'react'
// import data from './public/data.json'
function App() {

  return (
    <div className="App">
     <Comment/>
     {/* {data} */}
    </div>
  );
}

export default App;
