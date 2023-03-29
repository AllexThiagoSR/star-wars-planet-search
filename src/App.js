import React from 'react';
import './App.css';
import ApliedFilters from './components/ApliedFilters';
import FiltersForm from './components/FiltersForm';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FiltersForm />
      <ApliedFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
