import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import mockFetch from './utils/fetchMocked';

describe('Testa a renderização da tabela', () => {
  test('Testa se o "Loading..." aparece na tela e chama o fetch', async () => {
    global.fetch = jest.fn(mockFetch);
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://swapi.dev/api/planets');
  });

  test('Testa se são renderizadas uma linha da tabela pra cada planeta ', async () => {
    global.fetch = jest.fn(mockFetch);
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(11);
  });

  test('Testa se é renderizado os elementos da tabela', async () => {
    global.fetch = jest.fn(mockFetch);
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    const nameInput = screen.getByRole('textbox');
    const numberInput = screen.getByRole('spinbutton');
    const selects = screen.getAllByRole('combobox');
    expect(nameInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
  });
});
