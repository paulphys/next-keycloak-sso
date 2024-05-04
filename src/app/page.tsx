import { getServerSession } from 'next-auth'

import { authOptions } from './api/auth/[...nextauth]/route'
import Login from '../components/login'
import Logout from '../components/logout'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    return <div>
      <div>Your name is {session.user?.name} and your email is {session.user?.email}</div>
      <div><Logout /></div>
    </div>
  }
  return (
    <div>
      <Login />
    </div>
  )
}