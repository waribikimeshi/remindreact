//TODO:型。maketypesにrestのjson貼付けて作成した
export interface Authentication {
    id: number;
    mailAddress: string;
    password: string;
    role: string;
    expirationDate: string;
    lock: boolean;
    enabled: boolean;
    version: number;
    createdUser: string;
    createDatetime: string;
    lastModifiedUser: string;
    lastModifiedDatetime: string;
  }
  

export default function Home() {
    return (
        <>
            <div>http://localhost:3000/authentication/list</div>
            <div>リスト</div>
            <div>app\authentication\list\page.tsx</div>
        </>
    )
}
  
