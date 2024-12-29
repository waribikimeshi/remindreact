import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IAuthentication } from "../types";
import AuthenticationCrud from "@/app/components/templates/AuthenticationCrud";

export default function Page(){

    return(
        <>
            <AuthenticationCrud />
        </>
    );
}