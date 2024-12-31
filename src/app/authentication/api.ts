import { IAuthentication } from "./types";

//TODO:サーバ落ちてたらエラーになる。SPAじゃなしやな
export const ReadAll = async (): Promise<IAuthentication[]> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/list`,{
    cache:"no-store", //SSRサーバサイドレンダリング
    });
    const authenticationList = await response.json();

    return authenticationList;
}

export const Create = async (authentication:IAuthentication): Promise<IAuthentication> => {
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

//なんかnext.js使えるのかね。。。
export const Read = async (id:string): Promise<IAuthentication> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/get/${id}`,{
        cache:"no-store", //SSRサーバサイドレンダリング
    });
    
    const authentication = await response.json() ;

    return authentication;
}

export const Update = async (authentication:IAuthentication): Promise<IAuthentication> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/patch`,{
        method: "PATCH",
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

export const Delete = async (id:string): Promise<string> => {
    const response = await fetch(`http://localhost:8080/v20241209/authentication/delete/${id}`,{
        method: "DELETE",
        cache:"no-store", //SSRサーバサイドレンダリング
    });

    //TODO:エラー処理
    return "とりあえず戻り値"
}
