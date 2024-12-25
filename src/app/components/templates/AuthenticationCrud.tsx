"use client"  //consoleはF12のブラウザ側

import { create } from '@/app/authentication/api';
import { IAuthentication } from '@/app/authentication/types';
import Link from 'next/link';
import React, { FormEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const AuthenticationCrud = () => {
  const { register, handleSubmit, formState:{errors}, watch } = useForm<IAuthentication>();

  const onSubmit: SubmitHandler<IAuthentication> = authentication => {
    console.log(authentication);

    const newAuthentication = create(authentication);

    //awaitとかいるのか
    //再描画

    console.log(newAuthentication);

  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">id</label>
        <input  
          {...register("id",{min:0,required:{value:true,message:"必須です"}})}
          type="number"
          defaultValue={0}
          min={0}
         />
         {errors.id?.message}
      </div>
      <div>
        <label htmlFor="mailAddress">mailAddress</label>
        <input  
          {...register("mailAddress",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"aaa@gmail.com"}
         />
         {errors.mailAddress?.message}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input  
          {...register("password",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"{bcrypt}$2a$10$BooaIiRno2t5XKmsroWHG.HC9QqIa8Z4BUahMLaI8vRj3Oo4Tfyx."}
         />
         {errors.password?.message}
      </div>
      <div>
        <label htmlFor="role">role</label>
        <input  
          {...register("role",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"ROLE_PROVIDER_CONTRACT_2"}
         />
         {errors.role?.message}
      </div>
      <div>
        <label htmlFor="expirationDate">expirationDate</label>
        <input  
          {...register("expirationDate",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"9999-12-31"}
         />
         {errors.expirationDate?.message}
      </div>
      <div>
        <label htmlFor="lock">lock</label>
        <input  
          {...register("lock",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"false"}
         />
         {errors.lock?.message}
      </div>
      <div>
        <label htmlFor="enabled">enabled</label>
        <input  
          {...register("enabled",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"true"}
         />
         {errors.enabled?.message}
      </div>
      <div>
        <label htmlFor="version">version</label>
        <input  
          {...register("version",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"1"}
         />
         {errors.version?.message}
      </div>
      <div>
        <label htmlFor="createdUser">createdUser</label>
        <input  
          {...register("createdUser",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"anonymousUser"}
         />
         {errors.createdUser?.message}
      </div>
      <div>
        <label htmlFor="createDatetime">createDatetime</label>
        <input  
          {...register("createDatetime",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"2020-08-15T02:58:00.000+00:00"}
         />
         {errors.createDatetime?.message}
      </div>
      <div>
        <label htmlFor="lastModifiedUser">lastModifiedUser</label>
        <input  
          {...register("lastModifiedUser",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"waribikimeshi@gmail.com"}
         />
         {errors.lastModifiedUser?.message}
      </div>
      <div>
        <label htmlFor="lastModifiedDatetime">lastModifiedDatetime</label>
        <input  
          {...register("lastModifiedDatetime",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={"2021-01-25T03:39:44.000+00:00"}
         />
         {errors.lastModifiedDatetime?.message}
      </div>
      <div>
        <button type="submit">登録</button>
        <Link href="/authentication/list" passHref>
          <button>戻る</button>
        </Link>

      </div>
      
    </form>
  )
}

export default AuthenticationCrud
