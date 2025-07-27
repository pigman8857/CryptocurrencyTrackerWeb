import {useContext} from 'react'
import Home from './home'
import SignUpPage from './signup'
import { AuthContext, type AuthContextType } from '../context/data-context';

function Landing() {

  const { authenticating, user } = useContext(AuthContext) as AuthContextType;

  const Render = () => {
    if(authenticating)
      return <h1>Authenticating....</h1>
    else if(user){
      return <Home></Home>;
    } 
    else
      return <SignUpPage />;
  }


  return (
    <>
      <Render></Render>
    </>
  )
}

export default Landing