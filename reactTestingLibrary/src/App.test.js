import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";

//jest.mock('axios');

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
test('Testeo mokeo del servicio', async () =>{

    axios.get.mockReturnValueOnce({
        data : [{
            meanings:[{
                definitions:[{
                    definition: 'Something like such a unit of language'
                }]
            }]
        }]
    });

    //Busco en la pantalla un objeto en el dom que contenga el Placeholder en cuestion, en este caso es el input para insertar la keySearch
    const inputPlaceholder = screen.getByPlaceholderText('Inserte palabra a buscar');
    const submitButton = screen.getByRole('button', { id:'idSubmit' });
    
    fireEvent.change(inputPlaceholder, {target: {value: 'word'}});
    fireEvent.click(submitButton);

    const wordmeaning = await screen.findByText(/Something like such a unit of language/i);

    expect(wordmeaning).toBeInTheDocument();
});
*/