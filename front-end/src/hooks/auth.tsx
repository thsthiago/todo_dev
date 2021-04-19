import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface AuthState {
  token: string;
  user: object;
}

interface SignCredentials {
  email: string;
  password: string;
}

interface userData {
  id: string;
  name: string;
}

interface AuthContextData {
  user: userData;
  token: string;
  signIn(credentials: SignCredentials): Promise<void>;
  signOut(): void;
  changePassword({ password, newPassword }: PasswordData): Promise<void>;
}

interface PasswordData {
  password: string;
  newPassword: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@GoBarber:token', token)
    localStorage.setItem('@GoBarber:user', JSON.stringify(user))

    setData({ user, token })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token')
    localStorage.removeItem('@GoBarber:user')

    setData({} as AuthState)
  }, [])

  const changePassword = useCallback(async ({ password, newPassword }: PasswordData): Promise<void> => {
    const { id } = data.user as userData
    const response = await api.put('/users',
      {
        id_user: id,
        password,
        newPassword
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      }
    )

    if (response.status === 202) {
      throw new Error()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user as userData, token: data.token, signIn, signOut, changePassword }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth (): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
