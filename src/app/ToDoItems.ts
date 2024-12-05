export interface ToDo {
    ID:number;
    Title: string;
    Description:string;
    CategoryID:number;
    Category:{
        ID:number;
        Name:string;
    };
}