import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { getWordMeaning } from './services/DictionaryServiceImpl'
import App from "./App";


beforeEach( () =>{
    //Renderizo App
    render(<App />);
});

test('Testeo integracion de la pantalla', () =>{
    //Busco en la pantalla un objeto en el dom que contenga el Placeholder en cuestion, en este caso es el input para insertar la keySearch
    const inputPlaceholder = screen.getByPlaceholderText('Inserte palabra a buscar');
    //La expectativa es que dicho input se encuentre en la pantallaa
    expect(inputPlaceholder).toBeInTheDocument();
    //Busco en la pantalla un objeto en el dom que contenga el texto del boton
    const submitButton = screen.getByRole('button', { id:'idSubmit' });
    //La expectativa es que dicho boton se encuentre en la pantallaa
    expect(submitButton).toBeInTheDocument();
});

test('Testeo insercion de input en placeHolder', () =>{
    //Busco en la pantalla un objeto en el dom que contenga el Placeholder en cuestion, en este caso es el input para insertar la keySearch
    const inputPlaceholder = screen.getByPlaceholderText('Inserte palabra a buscar');
    fireEvent.change(inputPlaceholder, {target: {value: 'definition'}});
    expect(inputPlaceholder.value).toBe('definition');
});

test('Testeo insercion de input en placeHolder y llamado del servicio, simulando click en submit', () =>{
    //Busco en la pantalla un objeto en el dom que contenga el Placeholder en cuestion, en este caso es el input para insertar la keySearch
    const inputPlaceholder = screen.getByPlaceholderText('Inserte palabra a buscar');
    const submitButton = screen.getByRole('button', { id:'idSubmit' });
    
    fireEvent.change(inputPlaceholder, {target: {value: 'defnition'}});
    fireEvent.click(submitButton);
});
/*
test('Testeo llamado del servicio Real (No recomendado)', async () =>{
    //Llamo al servicio con el keySearch defnition que se que no trae resultados
    const responseService = await getWordMeaning('defnition');
    expect(responseService).toBe('Result not found, try other word');
});
*/

jest.mock('./services/DictionaryServiceImpl');
test('Testeo mokeo del servicio', async () =>{
    getWordMeaning.mockReturnValueOnce('Result not found, try other word');
    const responseService = await getWordMeaning('defnition');
    expect(responseService).toBe('Result not found, try other word');
});

