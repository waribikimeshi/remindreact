import { IAuthentication } from "./types";

//TODO:サーバ落ちてたらエラーになる。SPAじゃなしやな
export const readAll = async (): Promise<IAuthentication[]> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/list`,{
    cache:"no-store", //SSRサーバサイドレンダリング
    });
    const authenticationList = await response.json();

    return authenticationList;
}

export const create = async (authentication:IAuthentication): Promise<IAuthentication[]> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/post`,{
        method: "POST",
        headers:{
            "content-type" : "application/json",
        },
        body: JSON.stringify(authentication),
        }
    );

    //TODO:エラー処理
    
    const newAuthentication = await response.json();

    return newAuthentication;
}

export const read = async (id:string): Promise<IAuthentication> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/get/${id}`);
    
    const authentication = await response.json();

    return authentication;
}
