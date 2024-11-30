
import Login from './components/Login'
import Profile from './components/Profile'
import User from './components/User';

import UserContextProvider from './context/UserContextProvider';

function App() {
 

  return (
  
   <UserContextProvider>
    <h1>sherr hi khende</h1>
    <Login/>
    <Profile/>
    <User/>
   </UserContextProvider>
  )
}

export default App
