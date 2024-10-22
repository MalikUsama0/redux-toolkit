
import './App.css'

import CakeView from './features/cake/CakeView'
import IceCreamView from './features/icecream/IceCreamView'
import ProductsView from './features/products/ProductView'
import UsersView from './features/user/UsersView'


function App() {

  return (
    <div className='app'>
      
        <IceCreamView />
        <CakeView />
        <UsersView />
        <ProductsView/>
    </div>
  )
}

export default App
