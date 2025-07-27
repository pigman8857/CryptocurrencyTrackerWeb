import { useContext } from 'react'
import { AuthContext, type AuthContextType } from '../context/data-context';

function Home() {
  const { user } = useContext(AuthContext) as AuthContextType;
  return (
    <div>home {user?.email}</div>
  )
}

export default Home