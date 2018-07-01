export class product_class{
    constructor(public p_id:number,
    public name?:string,
    public price?:number,
    public img?:string,
    public color?:string,
    public mfg?:string,
    public fkcat_id?:number,
    public soh?:number
    ){}
}