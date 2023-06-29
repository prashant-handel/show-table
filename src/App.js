import React, { useState } from 'react';
import FetchData from './components/FetchData';
import { AppContext } from './Context';

const App = ()=>{
    const [data,setData] = useState([]);
    return(
        <>
        <AppContext.Provider value={[data,setData]}>
        <FetchData/>
        </AppContext.Provider>
        </>
    )
}

export default App;