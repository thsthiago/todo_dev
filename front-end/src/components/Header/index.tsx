import React from 'react'
import { Container } from './styles'
import logoImg from '../../assets/Logo.svg'
import Profile from './components/Profile'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/dashboard">
          <img src={logoImg} alt="Todo Dev"/>
        </Link>
        <Profile />
      </div>
    </Container>
  )
}

export default Header
