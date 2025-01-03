import { IAuthentication } from '@/app/authentication/types'
import Link from 'next/link';
import React from 'react'

interface IAuthenticationListLineProps{
    authentication: IAuthentication;
    hrefRead: string;
    hrefUpdate: string;
    hrefDelete: string;

}

const AuthenticationListLine = ({authentication,hrefRead,hrefUpdate,hrefDelete}:IAuthenticationListLineProps) => {
  return (
    <>
        <li key={authentication.id}>
            <span>{authentication.mailAddress}</span>

            <Link href={`${hrefRead}${authentication.id}`}　passHref>
                <button>参照</button>
            </Link>

            <Link href={`${hrefUpdate}${authentication.id}`}　passHref>
                <button>更新</button>
            </Link>

            <Link href={`${hrefDelete}${authentication.id}`}　passHref>
                <button>削除</button>
            </Link>
        </li>
    </>
)
}
export default AuthenticationListLine
