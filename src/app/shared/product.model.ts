export class Product{
    public name: string
    public productId: string
    public shortDescription: string
    public description: string
    public cost: number
    public imagePath: string

    constructor(name: string, id: string, sDesc: string, desc: string, cost: number, imgPath: string){
        this.name = name;
        this.productId = id;
        this.shortDescription = sDesc;
        this.description = desc;
        this.cost = cost;
        this.imagePath = imgPath;
    }
}