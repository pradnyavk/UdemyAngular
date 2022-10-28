export class Recipe{
      public name:string;
      public description:string;
      public imgPath:string;

        constructor(name:string,desc:string,path:string){
            this.name= name;
            this.description=desc;
            this.imgPath=path;
        }
}