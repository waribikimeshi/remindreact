import { Authentication } from '@/app/authentication/types'
import React from 'react'

interface AuthenticationListProps{
    authenticationList: Authentication[];
}

const AuthenticationList = ({authenticationList}:AuthenticationListProps) => {
  return (
        <ul>
            {authenticationList.map((authentication:Authentication) => (
            <li key={authentication.id}>
                <span>{authentication.mailAddress}</span>
                <div><button>編集</button></div>
                <div><button>削除</button></div>    
            </li>
            ))}
        </ul>
)
}

export default AuthenticationList
