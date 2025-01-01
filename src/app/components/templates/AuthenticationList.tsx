import { IAuthentication } from '@/app/authentication/types'
import React from 'react'
import AuthenticationListLine from '../molecules/AuthenticationListLine';
import AuthenticationAdd from '../molecules/AuthenticationListAdd';

interface IAuthenticationListProps{
    authenticationList: IAuthentication[];
}

const AuthenticationList = ({authenticationList}:IAuthenticationListProps) => {
  return (
        <>
            <AuthenticationAdd />
            <ul>
                    {authenticationList.length > 0 ? (
                            authenticationList.map((authentication:IAuthentication) => (
                                <AuthenticationListLine key={authentication.id} authentication={authentication} />
                                
                            ))
                        ) : (
                            <li>対象データがありません。</li> // データがない場合
                        )
                    }

            </ul>
        </>
)
}

export default AuthenticationList
