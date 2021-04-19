import React, { useCallback, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../hooks/auth'

import { Container } from './styles'

const Profile: React.FC = () => {
  const { user, signOut } = useAuth()
  const [nav, setNav] = useState(false)

  const visibleNav = () => setNav(!nav)

  return (
    <Container nav={nav} onClick={() => visibleNav()}>
      <CgProfile size={28} color=""/>
      <strong>{user.name}</strong>
      {nav &&
        <nav>
          <Link to={`/account/${user.name}`}>
            <FiUser size={18}/>
            Minha conta
          </Link>
          <Link to="/" onClick={signOut}>
            <FiLogOut size={18}/>
            Sair da conta
          </Link>
        </nav>
      }
    </Container>
  )
}

export default Profile
