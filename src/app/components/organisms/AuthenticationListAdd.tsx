import { IAuthentication } from '@/app/authentication/types'
import Link from 'next/link'
import React from 'react'


const AuthenticationAdd = () => {
  return (
    <>
      <div>
        <Link href="/authentication/pages/create"　passHref>
          <button>新規</button>
        </Link>

      </div>
    </>
)
}
export default AuthenticationAdd
