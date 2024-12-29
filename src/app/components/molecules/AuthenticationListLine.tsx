import { IAuthentication } from '@/app/authentication/types'
import Link from 'next/link';
import React from 'react'

interface IAuthenticationProps{
    authentication: IAuthentication;
}

const AuthenticationListLine = ({authentication}:IAuthenticationProps) => {
  return (
            <li key={authentication.id}>
                <span>{authentication.mailAddress}</span>

                <Link href={`/authentication/read/${authentication.id}`}　passHref>
                    <button>参照</button>
                </Link>

                <Link href={`/authentication/update/${authentication.id}`}　passHref>
                    <button>更新</button>
                </Link>

                <Link href={`/authentication/delete/${authentication.id}`}　passHref>
                    <button>削除</button>
                </Link>
            </li>
)
}
export default AuthenticationListLine
