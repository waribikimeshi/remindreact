import { IAuthentication } from '@/app/authentication/types'
import Link from 'next/link'
import React from 'react'

interface IAuthenticationAddProps{
  hrefCreate: string;
}

const AuthenticationAdd = ({hrefCreate}:IAuthenticationAddProps) => {
  return (
    <>
      <div>
        <Link href={`${hrefCreate}`}　passHref>
          <button>新規</button>
        </Link>

      </div>
    </>
)
}
export default AuthenticationAdd
