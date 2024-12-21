import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Authentication } from "../list/page";

export default function Crud(){

    //フォーム取得してpost
    const createAuthentication = async(formData:FormData) => {
        "use server";
        //console.log(formData);
        const data:Authentication = {
            id : 0,
            mailAddress : formData.get("mailAddress")?.toString() ?? "",
            password : "{bcrypt}$2a$10$BooaIiRno2t5XKmsroWHG.HC9QqIa8Z4BUahMLaI8vRj3Oo4Tfyx.",
            role : "ROLE_PROVIDER_CONTRACT_2",
            expirationDate : "9999-12-31",
            lock : false,
            enabled : true,
            version : 1,
            createdUser : "anonymousUser",
            createDatetime : "2020-08-15T02:58:00.000+00:00",
            lastModifiedUser : "waribikimeshi@gmail.com",
            lastModifiedDatetime :  "2021-01-25T03:39:44.000+00:00",                
        };

        // console.log(JSON.stringify(data));
        // console.log(data);

        await fetch("http://localhost:8080/v20241209/authentication/post",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify(data),
            }
        );
        // //データの再検証を行ってキャッシュを更新する
        // revalidatePath("/authentication/list");
        // //リストにリダイレクト
        // redirect("/authentication/list");
    }

    return(
        <>
        <h1>新規</h1>
        <form action={createAuthentication}>
            <input type="text" name="mailAddress" />
            <button type="submit">作成</button>
        </form>
        </>
    );
}