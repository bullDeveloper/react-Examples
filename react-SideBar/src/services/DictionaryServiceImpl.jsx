import axios  from 'axios';

export async function getWordMeaning (keySearch) {
    const url ='https://api.dictionaryapi.dev/api/v2/entries/en/';
    console.log('URL: '+ url+ keySearch);
    try{
        const responseService = await axios.get(url+keySearch,{method:"GET"});
        //console.log(definitions)
        if(responseService.data){
            const definitions = responseService.data[0].meanings[0].definitions;
            var definitionsConstruct = 'Definitions to ('+keySearch+'): \n';
            
            definitions.forEach(element => {
                definitionsConstruct = definitionsConstruct + '- ' + element.definition + '\n';
            });
            
            return definitionsConstruct;
        }else{
            return 'Result not found, try other word';
        }
    } catch(err){
        if(err.response.status===404)
            return'Result not found, try other word';
        else{
            alert(err);
            return 'Result not found, try other word';
        }
    }
}