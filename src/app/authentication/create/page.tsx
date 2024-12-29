import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IAuthentication } from "../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";
import { Metadata } from "next";


export const metadata: Metadata = {
    //TODO:タイトル個別画面でmetadata定義
    title: "authentication/create | remindreact",  
  };

export default async function Page(){

    return(
        <>
            <AuthenticationCrud  />
        </>
    );
}