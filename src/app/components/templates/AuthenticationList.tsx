import { IAuthentication } from '@/app/authentication/types'
import React from 'react'
import AuthenticationListLine from '../organisms/AuthenticationListLine';
import AuthenticationAdd from '../organisms/AuthenticationListAdd';

interface IAuthenticationListProps{
    authenticationList: IAuthentication[];
    hrefCreate: string;
    hrefRead: string;
    hrefUpdate: string;
    hrefDelete: string;
}

const AuthenticationList = (
    {authenticationList,hrefCreate,hrefRead,hrefUpdate,hrefDelete}
    :IAuthenticationListProps) => {
  return (
        <>
            <AuthenticationAdd 
            hrefCreate={hrefCreate}
            />
            <ul>
                    {authenticationList.length > 0 ? (
                            authenticationList.map((authentication:IAuthentication) => (
                                <AuthenticationListLine 
                                key={authentication.id} 
                                authentication={authentication} 
                                hrefRead={hrefRead}
                                hrefUpdate={hrefUpdate}
                                hrefDelete={hrefDelete}
                                />
                                
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
