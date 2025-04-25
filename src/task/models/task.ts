export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public year: number,
    public statut: string,  
  ) {}
}
//Nasna3 constructor besh ykoun ashel eni nasna3 el object wel initialisation ashel (const task = new task('1','sasa','in progr")) 
// withhout constructor  const task = new Task();
// task.id = '1';
// task.text = 'Complete the project';
// task.year = 2024;
//+ el constructor yofredh aalik values taa les attributs w mnghir constructor yhothom undefined




// export class Task {
//   id: string;
//   text: string;
//   year: number;

//   constructor(id: string, text: string, year: number) {
//     this.id = id;
//     this.text = text;
//     this.year = year;
//   }
// }
