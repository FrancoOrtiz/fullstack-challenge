import React from 'react';
import { Layout } from './components/Layout';
import { Search } from './components/Search';
import { DataProvider } from './context/DataContext';

export const App = () => {

  return (
    <DataProvider>
      <Layout>
        <Search/>
      </Layout>
    </DataProvider>
    
  )
}
