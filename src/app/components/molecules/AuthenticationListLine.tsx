import { IAuthentication } from '@/app/authentication/types'
import React from 'react'

interface IAuthenticationProps{
    authentication: IAuthentication;
}

const AuthenticationListLine = ({authentication}:IAuthenticationProps) => {
  return (
            <li key={authentication.id}>
                <span>{authentication.mailAddress}</span>
                <div><button>編集</button></div>
                <div><button>削除</button></div>    
            </li>
)
}
export default AuthenticationListLine
