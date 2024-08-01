import './App.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Test from './Components/TestingComponent/Test'
import { persistor, store } from './store'
function App() {

  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Test/>
      </PersistGate>
      </Provider>
    </>
  )
}

export default App
