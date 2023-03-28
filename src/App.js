import React from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FiltersForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
