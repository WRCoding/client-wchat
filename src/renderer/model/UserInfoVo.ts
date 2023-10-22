class UserInfoVo {
    id: string;
    userName: string
    email: string
    phone?: string
    avatarUrl?: string
    ipAndPort: string

    constructor(userName:string,email:string,ipAndPort:string,phone?:string,avatarUrl?:string) {
        this.userName = userName;
        this.email = email;
        this.ipAndPort = ipAndPort;
        this.phone = phone
        this.avatarUrl = avatarUrl
    }
}