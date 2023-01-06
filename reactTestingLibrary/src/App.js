import './App.css';
import React, { useState } from 'react';
import SearchServiceFormulario from './componentes/SearchServiceFormulario';
import { getWordMeaning } from './services/DictionaryServiceImpl'
import GridLoader from "react-spinners/GridLoader";

import axios  from 'axios';

function App() {

  const [loading, setLoading] = useState(false);
  const [responseSearch, setResponseSearch] = useState('');


  const SearchServiceSubmit = async keySearch => {
    console.log('SearchServiceSubmit: '+keySearch);
    setResponseSearch('');
    setLoading(true);
    const responDictionaryseService = await getWordMeaning(keySearch);
    setResponseSearch(responDictionaryseService);
    setLoading(false);
   }


  return (
    <div className="App">
      <div className='contenedor-principal'>
        <SearchServiceFormulario onSubmit={SearchServiceSubmit}></SearchServiceFormulario>
        <span className='span-resultado' >{responseSearch}</span>
        <GridLoader
        color="#36d7b7"
        loading={loading}
        size={10}
        />
      </div>
    </div>
  );
}

export default App;

