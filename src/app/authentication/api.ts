import { IAuthentication } from "./types";

//TODO:サーバ落ちてたらエラーになる。SPAじゃなしやな
export const ReadAll = async (): Promise<IAuthentication[]> => {
    try {
        const response = await fetch(`http://localhost:8080/v20241209/authentication/list`, {
            cache: "no-store", // SSRサーバサイドレンダリング
        });

        // レスポンスのステータスが200番台でない場合はエラーを投げる
        if (!response.ok) {
            throw new Error(`HTTP エラー! Status: ${response.status}`);
        }

        // JSONの解析中にエラーが発生する場合を考慮
        const authenticationList = await response.json();

        return authenticationList;

    } catch (error) {
        //TypeError: fetch failed
        //サーバーがダウン・URL誤り・ネットワーク切断
        // TypeError: fetch failed などが発生する場合にカスタムメッセージを表示
        // const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';

        // エラーメッセージをログに出力
        console.error('ReadAllのfetchに失敗!:', error);

        if (error instanceof Error) {
            throw new Error(`データ取得に失敗しました。
                詳細: サーバダウン・URL誤り・ネットワーク切断が考えられます。`);
        }else{
            throw error;
        }

    }
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
