import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import mockFetch from './utils/fetchMocked';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Testa a renderização da tabela', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  })
  test('Testa se o "Loading..." aparece na tela e chama o fetch', async () => {
    act(() => {
      render(<App />);
    });
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://swapi.dev/api/planets');
  });

  test('Testa se são renderizadas uma linha da tabela pra cada planeta ', async () => {
    act(() => {
      render(<App />);
    });
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(11);
  });

  test('Testa se é renderizado os elementos do formulário', async () => {
    act(() => {
      render(<App />);
    });
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    const nameInput = screen.getByRole('textbox');
    const numberInput = screen.getByRole('spinbutton');
    const selects = screen.getAllByRole('combobox');
    const radioButtons = screen.getAllByRole('radio')
    const buttons = screen.getAllByRole('button')
    expect(nameInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(selects).toHaveLength(3);
    expect(radioButtons).toHaveLength(2);
    expect(buttons).toHaveLength(3);
    for(const select of selects) {
      expect(select).toBeInTheDocument();
    }
    expect(radioButtons[0]).toBeInTheDocument();
    expect(radioButtons[1]).toBeInTheDocument();
  });

  test('Testa se filtra por nome ao digitar "t" no input de pesquisa', async () => {
    act(() => {
      render(<App />);
    });
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    const nameInput = screen.getByRole('textbox');
    userEvent.type(nameInput, 't')
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(4);
  });

  test('Testa se é possível adicionar um filtro numérico', async () => {
    act(() => {
      render(<App />);
    });
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(screen.getAllByRole('row')).toHaveLength(11);
    const numberInput = screen.getByRole('spinbutton');
    const column = screen.getByTestId('column-filter');
    const comparison = screen.getByTestId('comparison-filter')
    const filterButton = screen.getByRole('button', { name: 'Filtrar' });
    userEvent.selectOptions(column, 'rotation_period');
    // await waitFor(() => expect(screen.getAllByText('rotation_period')[0]).toBeVisible(), { timeout: 2000 });
    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.clear(numberInput);
    userEvent.type(numberInput, '23')
    userEvent.click(filterButton);
    await waitFor(() => screen.getByRole('button', { name: 'Remover'}));
    screen.logTestingPlaygroundURL();
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(4);
  });
});
