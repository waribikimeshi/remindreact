import { IAuthentication } from '@/app/authentication/types'
import Link from 'next/link';
import React from 'react'

interface IAuthenticationListLineProps{
    authentication: IAuthentication;
}

const AuthenticationListLine = ({authentication}:IAuthenticationListLineProps) => {
  return (
    <>
        <li key={authentication.id}>
            <span>{authentication.mailAddress}</span>

            <Link href={`/authentication/pages/read/${authentication.id}`}　passHref>
                <button>参照</button>
            </Link>

            <Link href={`/authentication/pages/update/${authentication.id}`}　passHref>
                <button>更新</button>
            </Link>

            <Link href={`/authentication/pages/delete/${authentication.id}`}　passHref>
                <button>削除</button>
            </Link>
        </li>
    </>
)
}
export default AuthenticationListLine
