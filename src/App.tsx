import './App.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import Test from './Components/TestingComponent/Test'
import { persistor, store } from './store'
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './Routes/RootRouter';
function App() {

  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
     <BrowserRouter>
     <RootRouter/>
     </BrowserRouter>
      </PersistGate>
      </Provider>
    </>
  )
}

export default App
