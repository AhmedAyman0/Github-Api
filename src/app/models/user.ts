export class User {
    constructor(
        public username:string,
        public password:string,
        public email:string,
        public birthdate:string,
        public avatar:string,
        public gender:string,
        public favouriteList:any[]
    ){}
}
