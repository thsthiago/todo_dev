import React, { useCallback, useState } from 'react'
import { Container } from './styles'
import logoImg from '../../assets/Logo.svg'
import Profile from './components/Profile'
import { Link } from 'react-router-dom'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()
  const [bars, setBars] = useState(false)

  const activebars = useCallback(() => {
    setBars(!bars)
  }, [bars])

  return (
    <Container bars={bars}>
      <div>
        <Link to="/dashboard">
          <img src={logoImg} alt="Todo Dev"/>
        </Link>
        <Profile />

        <div>
          <div onClick={() => activebars()}>
            <div></div>
          </div>
          <nav>
            <Link to={`/account/${user.name}`} onClick={() => activebars()}>
              <FiUser size={25}/>
              Minha conta
            </Link>
            <Link to="/" onClick={signOut}>
              <FiLogOut size={25}/>
              Sair da conta
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default Header
