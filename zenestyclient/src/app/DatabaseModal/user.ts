export class User {
    constructor(
        public googleId:string,
        public firstName:string,
        public lastName:string,
        public userEmail:string,
        public userMobile:number,
        public userAddress:string,
        public userLocation:string,
        public userPassword1:string,
        public userPassword2:string
    ){}
}
