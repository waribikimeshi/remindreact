//TODO:型。maketypesにrestのjson貼付けて作成した
export interface IAuthentication {
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
  