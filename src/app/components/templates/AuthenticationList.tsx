import { IAuthentication } from '@/app/authentication/types'
import React from 'react'
import AuthenticationListLine from '../molecules/AuthenticationListLine';

interface IAuthenticationListProps{
    authenticationList: IAuthentication[];
}

const AuthenticationList = ({authenticationList}:IAuthenticationListProps) => {
  return (
        <ul>
            {authenticationList.map((authentication:IAuthentication) => (
                <AuthenticationListLine key={authentication.id} authentication={authentication} />
            ))}
        </ul>
)
}

export default AuthenticationList
