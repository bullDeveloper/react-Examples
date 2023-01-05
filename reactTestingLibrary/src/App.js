import './App.css';
import React, { useState } from 'react';
import SearchServiceFormulario from './componentes/SearchServiceFormulario';
import GridLoader from "react-spinners/GridLoader";

import axios  from 'axios';

function App() {

  const [loading, setLoading] = useState(false);
  const [responseSearch, setResponseSearch] = useState('');
  const url ='https://api.dictionaryapi.dev/api/v2/entries/en/';

  const getResponseServiceAsync = async (keySearch) => {
    console.log('URL: '+ url+ keySearch);

    try{
        setResponseSearch('');
        setLoading(true);
        const response = await axios.get(url+keySearch,{method:"GET"});
        if(response.data){
            console.log('Busqueda Exitosa!');
            const definitions = response.data[0].meanings[0].definitions;
            var definitionsConstruct = 'Definitions to ('+keySearch+'): \n';
            definitions.forEach(element => {
              definitionsConstruct = definitionsConstruct + '- ' + element.definition + '\n';
            });
            setResponseSearch(definitionsConstruct);
        }else{
          setResponseSearch('Result not found, try other word');
        }
    } catch(err){
        if(err.response.status===404)
          setResponseSearch('Result not found, try other word');
        else
            alert(err.response.data.message);
    } finally{
      setLoading(false);
    }
  }

  const SearchServiceSubmit = keySearch => {
      console.log('SearchServiceSubmit: '+keySearch);
      getResponseServiceAsync(keySearch);
  };


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

