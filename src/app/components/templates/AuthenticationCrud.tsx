// "use client"  //consoleはF12のブラウザ側。
// 部品にあるべきではないのかね。親でクライアント読み込んでる部品はクライアントになるらしい

import { create } from '@/app/authentication/api';
import { IAuthentication } from '@/app/authentication/types';
import Link from 'next/link';
import React, { FormEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

interface IAuthenticationCrudProps {
  onSubmit?: SubmitHandler<IAuthentication>;
  defaultValues?: IAuthentication; // 編集用のデフォルト値（更新時など）postはundefined許可
  isReadOnly?: boolean; //参照のみか
}


//post
const AuthenticationCrud = ({ onSubmit, defaultValues ,isReadOnly = false}: IAuthenticationCrudProps) => {
  const {  register, reset, handleSubmit, formState: { errors }, watch  } = useForm<IAuthentication>({ 
    defaultValues 
  });

  //if(authentication === undefined){  }

  //イベントは各画面から
  // const onSubmit: SubmitHandler<IAuthentication> = authentication => {
  //   console.log(authentication);

  //   const newAuthentication = create(authentication);

  //   //awaitとかいるのか
  //   //再描画

  //   console.log(newAuthentication);

  // };

  //なんか定義しないとonsubmitが渡された時だけform実行の制御ができないっぽい
  const formSubmit = (data: IAuthentication) => {
    //引数で指定された場合、そのonSubmitを実行する。
    if (onSubmit) {
      onSubmit(data);
    }
  };

  // //なんかチェックボックスfalseで必須エラーになる
  // const lockValue = watch("lock");
  // const enabledValue = watch("enabled");

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="id">id</label>
          {/*...registerは name ref onChange onBlur を展開*/}
          <input  
            {...register("id",{min:0,required:{value:true,message:"必須です"}})}
            type="number"
            // defaultValue={0}
            min={0}
            readOnly={isReadOnly} 
          />
          {errors.id?.message}
        </div>
        <div>
          <label htmlFor="mailAddress">mailAddress</label>
          <input  
            {...register("mailAddress",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"aaa@gmail.com"}
            readOnly={isReadOnly} 
          />
          {errors.mailAddress?.message}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input  
            {...register("password",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"{bcrypt}$2a$10$BooaIiRno2t5XKmsroWHG.HC9QqIa8Z4BUahMLaI8vRj3Oo4Tfyx."}
            readOnly={isReadOnly} 
          />
          {errors.password?.message}
        </div>
        <div>
          <label htmlFor="role">role</label>
          <input  
            {...register("role",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"ROLE_PROVIDER_CONTRACT_2"}
            readOnly={isReadOnly} 
          />
          {errors.role?.message}
        </div>
        <div>
          <label htmlFor="expirationDate">expirationDate</label>
          <input  
            {...register("expirationDate",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"9999-12-31"}
            readOnly={isReadOnly} 
          />
          {errors.expirationDate?.message}
        </div>
        <div>
          <label htmlFor="lock">lock</label>
          <input  
            //reacthookformのチェックボックス必須はtrue以外はエラーになる。falseは必須エラーの仕様
            {...register("lock",{})}
            // {...register("lock",{required:{value:true,message:"必須です"}})}
            type="checkbox"
            // defaultChecked={defaultValues?.lock}  // 初期値に応じて checkbox の状態を制御
            // defaultValue={"false"}
            readOnly={isReadOnly} 
          />
          {errors.lock?.message}
        </div>
        <div>
          <label htmlFor="enabled">enabled</label>
          <input  
            //reacthookformのチェックボックス必須はtrue以外はエラーになる。falseは必須エラーの仕様
            //{...register("enabled",{required:{value:true,message:"必須です"}})}
            {...register("enabled",{})}
            type="checkbox"
            // defaultValue={"true"}
            readOnly={isReadOnly} 
          />
          {errors.enabled?.message}
        </div>
        <div>
          <label htmlFor="version">version</label>
          <input  
            {...register("version",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"1"}
            readOnly={isReadOnly} 
          />
          {errors.version?.message}
        </div>
        <div>
          <label htmlFor="createdUser">createdUser</label>
          <input  
            {...register("createdUser",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"anonymousUser"}
            readOnly={isReadOnly} 
          />
          {errors.createdUser?.message}
        </div>
        <div>
          <label htmlFor="createDatetime">createDatetime</label>
          <input  
            {...register("createDatetime",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"2020-08-15T02:58:00.000+00:00"}
            readOnly={isReadOnly} 
          />
          {errors.createDatetime?.message}
        </div>
        <div>
          <label htmlFor="lastModifiedUser">lastModifiedUser</label>
          <input  
            {...register("lastModifiedUser",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"waribikimeshi@gmail.com"}
            readOnly={isReadOnly} 
          />
          {errors.lastModifiedUser?.message}
        </div>
        <div>
          <label htmlFor="lastModifiedDatetime">lastModifiedDatetime</label>
          <input  
            {...register("lastModifiedDatetime",{required:{value:true,message:"必須です"}})}
            type="text"
            // defaultValue={"2021-01-25T03:39:44.000+00:00"}
            readOnly={isReadOnly} 
          />
          {errors.lastModifiedDatetime?.message}
        </div>
        <div>
        {!isReadOnly && <button type="submit">実行</button>}
          <Link href="/authentication/list" passHref>
            <button>戻る</button>
          </Link>

        </div>
        
      </form>
    </>
  )
}

export default AuthenticationCrud
