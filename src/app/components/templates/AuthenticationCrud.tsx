"use client"  //consoleはF12のブラウザ側

import { create } from '@/app/authentication/api';
import { IAuthentication } from '@/app/authentication/types';
import React, { FormEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const AuthenticationCrud = () => {
  const { register, handleSubmit, formState:{errors}, watch } = useForm<IAuthentication>();

  const onSubmit: SubmitHandler<IAuthentication> = data => console.log(data);


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
          defaultValue={0}
         />
         {errors.mailAddress?.message}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input  
          {...register("password",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.password?.message}
      </div>
      <div>
        <label htmlFor="role">role</label>
        <input  
          {...register("role",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.role?.message}
      </div>
      <div>
        <label htmlFor="expirationDate">expirationDate</label>
        <input  
          {...register("expirationDate",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.expirationDate?.message}
      </div>
      <div>
        <label htmlFor="lock">lock</label>
        <input  
          {...register("lock",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.lock?.message}
      </div>
      <div>
        <label htmlFor="enabled">enabled</label>
        <input  
          {...register("enabled",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.enabled?.message}
      </div>
      <div>
        <label htmlFor="version">version</label>
        <input  
          {...register("version",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.version?.message}
      </div>
      <div>
        <label htmlFor="createdUser">createdUser</label>
        <input  
          {...register("createdUser",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.createdUser?.message}
      </div>
      <div>
        <label htmlFor="createDatetime">createDatetime</label>
        <input  
          {...register("createDatetime",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.createDatetime?.message}
      </div>
      <div>
        <label htmlFor="lastModifiedUser">lastModifiedUser</label>
        <input  
          {...register("lastModifiedUser",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.lastModifiedUser?.message}
      </div>
      <div>
        <label htmlFor="lastModifiedDatetime">lastModifiedDatetime</label>
        <input  
          {...register("lastModifiedDatetime",{required:{value:true,message:"必須です"}})}
          type="text"
          defaultValue={0}
         />
         {errors.lastModifiedDatetime?.message}
      </div>
      <div>
        <button type="submit">登録</button>
      </div>
      
    </form>
  )
}

export default AuthenticationCrud
