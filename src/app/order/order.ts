export class order_class{
    constructor(public order_id:number,
    public date:string,
    public amount:number,
    public fkp_id:number,
    public fkuser_id:string
    ){}
}