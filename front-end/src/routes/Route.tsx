import React from 'react'
import { Redirect, Route as ReactRoute, RouteProps as ReactDOMRouterProps } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

interface RouterProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth()

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user
          ? (
          <Component />
            )
          : (
          <Redirect to={{
            pathname: isPrivate ? '/' : '/dashboard',
            state: { from: location }
          }} />
            )
      }}
    />
  )
}

export default Route
