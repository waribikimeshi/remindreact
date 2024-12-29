import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IAuthentication } from "../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";

export default async function Page({params}:{params:{id:string}}){
    const id = Number(params.id);

    return(
        <>
            <AuthenticationCrud id={id} />
        </>
    );
}