


import Home from './Components/Home';

import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
