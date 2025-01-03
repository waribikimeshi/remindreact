import { IAuthentication } from "../types";

//サーバ落ちてたらエラーになる。SPAじゃなしやな⇒エラーは開発モードで表示されるらしい
export const ReadAll = async (): Promise<IAuthentication[]> => {
    try {
        const response = await fetch(`http://localhost:8080/v20241209/authentication/list`, {
            cache: "no-store", // SSRサーバサイドレンダリング
        });

        // レスポンスのステータスが200番台でない場合はエラーを投げる
        // レスポンスって、一回読むともう読めない
        if (!response.ok) {
            // エラーレスポンスをJSONとして取得
            const errorResponse = await response.json();

            console.error('Error response:', errorResponse);

            throw new Error(`データ取得に失敗しました。
                詳細：HTTPエラー${errorResponse.httpstatus} ${errorResponse.title} ${errorResponse.messages}`);
        }

        const authenticationList = await response.json();

        return authenticationList;

    } catch (error) {
        //TypeError: fetch failed

        // エラーメッセージをログに出力
        console.error('ReadAllのfetchに失敗!:', error);

        if (error instanceof Error) {
            if (error.message.includes('HTTPエラー')) {
                throw new Error(error.message);
            } else {            
                throw new Error(`データ取得に失敗しました。
                    詳細: サーバダウン・URL誤り・ネットワーク切断の可能性`);
            }
        }else{
            throw error;
        }

    }
}

export const Create = async (authentication:IAuthentication): Promise<IAuthentication> => {

    try {
        const response = await fetch(`http://localhost:8080/v20241209/authentication/post`,{
            method: "POST",
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify(authentication),
            }
        );
    
        // レスポンスのステータスが200番台でない場合はエラーを投げる
        // レスポンスって、一回読むともう読めない
        if (!response.ok) {
                // エラーレスポンスをJSONとして取得
                const errorResponse = await response.json();

                console.error('Error response:', errorResponse);

                throw new Error(`データ登録に失敗しました。
                    詳細：HTTPエラー${errorResponse.httpstatus} ${errorResponse.title} ${errorResponse.messages}`);
        }

        const newAuthentication = await response.json();

        return newAuthentication;
    
    } catch (error) {
        //TypeError: fetch failed

        // エラーメッセージをログに出力
        console.error('createのfetchに失敗!:', error);

        if (error instanceof Error) {
            if (error.message.includes('HTTPエラー')) {
                throw new Error(error.message);
            } else {            
                throw new Error(`データ登録に失敗しました。
                    詳細: サーバダウン・URL誤り・ネットワーク切断の可能性`);
            }
        }else{
            throw error;
        }

    }

}

//なんかnext.js使えるのかね。。。
export const Read = async (id:string): Promise<IAuthentication> => {

    try {
        const response = await fetch(`http://localhost:8080/v20241209/authentication/get/${id}`,{
            cache: "no-store", // SSRサーバサイドレンダリング
        });

        // レスポンスのステータスが200番台でない場合はエラーを投げる
        // レスポンスって、一回読むともう読めない
        if (!response.ok) {
            // エラーレスポンスをJSONとして取得
            const errorResponse = await response.json();

            console.error('Error response:', errorResponse);

            throw new Error(`データ取得に失敗しました。
                詳細：HTTPエラー${errorResponse.httpstatus} ${errorResponse.title} ${errorResponse.messages}`);
        }

        const authentication = await response.json() ;

        return authentication;

    } catch (error) {
        //TypeError: fetch failed

        // エラーメッセージをログに出力
        console.error('Readのfetchに失敗!:', error);

        // エラーメッセージをログに出力
        console.error('ReadAllのfetchに失敗!:', error);

        if (error instanceof Error) {
            if (error.message.includes('HTTPエラー')) {
                throw new Error(error.message);
            } else {            
                throw new Error(`データ取得に失敗しました。
                    詳細: サーバダウン・URL誤り・ネットワーク切断の可能性`);
            }
        }else{
            throw error;
        }

    }

}

export const Update = async (authentication:IAuthentication): Promise<IAuthentication> => {

    //TODO:エラー処理
    try {
        const response = await fetch(`http://localhost:8080/v20241209/authentication/patch`,{
            method: "PATCH",
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify(authentication),
            }
        );
        
        // レスポンスのステータスが200番台でない場合はエラーを投げる
        // レスポンスって、一回読むともう読めない
        if (!response.ok) {
                // エラーレスポンスをJSONとして取得
                const errorResponse = await response.json();

                console.error('Error response:', errorResponse);

                throw new Error(`データ更新に失敗しました。
                    詳細：HTTPエラー${errorResponse.httpstatus} ${errorResponse.title} ${errorResponse.messages}`);
        }

        const newAuthentication = await response.json();

        return newAuthentication;
        
    } catch (error) {
        //TypeError: fetch failed

        // エラーメッセージをログに出力
        console.error('patchのfetchに失敗!:', error);

        if (error instanceof Error) {
            if (error.message.includes('HTTPエラー')) {
                throw new Error(error.message);
            } else {            
                throw new Error(`データ登録に失敗しました。
                    詳細: サーバダウン・URL誤り・ネットワーク切断の可能性`);
            }
        }else{
            throw error;
        }

    }

}

export const Delete = async (id:string): Promise<Boolean> => {

    try {
        const response = await fetch(`http://localhost:8080/v20241209/authentication/delete/${id}`,{
            method: "DELETE",
            cache:"no-store", //SSRサーバサイドレンダリング
        });
        
        // レスポンスのステータスが200番台でない場合はエラーを投げる
        // レスポンスって、一回読むともう読めない
        if (!response.ok) {
                // エラーレスポンスをJSONとして取得
                const errorResponse = await response.json();

                console.error('Error response:', errorResponse);

                throw new Error(`データで駆除に失敗しました。
                    詳細：HTTPエラー${errorResponse.httpstatus} ${errorResponse.title} ${errorResponse.messages}`);
        }

        return response.ok;
    
    } catch (error) {
        //TypeError: fetch failed

        // エラーメッセージをログに出力
        console.error('deleteのfetchに失敗!:', error);

        if (error instanceof Error) {
            if (error.message.includes('HTTPエラー')) {
                throw new Error(error.message);
            } else {            
                throw new Error(`データ削除に失敗しました。
                    詳細: サーバダウン・URL誤り・ネットワーク切断の可能性`);
            }
        }else{
            throw error;
        }

    }

}
