import { IAuthentication } from '@/app/authentication/types'
import React from 'react'
import Authentication from '../molecules/Authentication';

interface IAuthenticationListProps{
    authenticationList: IAuthentication[];
}

const AuthenticationList = ({authenticationList}:IAuthenticationListProps) => {
  return (
        <ul>
            {authenticationList.map((authentication:IAuthentication) => (
                <Authentication key={authentication.id} authentication={authentication} />
            ))}
        </ul>
)
}

export default AuthenticationList
