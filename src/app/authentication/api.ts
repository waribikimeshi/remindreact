import { IAuthentication } from "./types";

//TODO:サーバ落ちてたらエラーになる。SPAじゃなしやな
export const getAllList = async (): Promise<IAuthentication[]> => {
    const responce = await fetch('http://localhost:8080/v20241209/authentication/list',{
    cache:"no-store", //SSRサーバサイドレンダリング
    });
    const authenticationList = responce.json();

    return authenticationList;
}