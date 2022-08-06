export class order{
    constructor(
        public itemlist : Array<string>,
        public totalprice:number,
        public totaltime:number,
        public servicename:string
    ){}
}