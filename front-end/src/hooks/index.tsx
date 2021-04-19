import React from 'react'
import { AuthProvider } from './auth'
import { TasksProvider } from './tasks'
import { ToastProvider } from './toast'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <TasksProvider>
        {children}
      </TasksProvider>
    </ToastProvider>
  </AuthProvider>
)

export default AppProvider
