//Class-Movie
class movie{

 constructor(title,studio,rating) 
 {
    this.title=title;
    this.studio=studio;
    if(rating !=undefined && rating !="")
    {
      this.rating=rating;
    }
    else
    {
      this.rating="PG";
    }
    console.log("TITLE : ",this.title);
    console.log("STUDIO : ",this.studio);
    console.log("RATING : ",this.rating);
 }

    getpg()
    {
       return(`The movie rating details is: ${this.title},${this.studio},${this.rating}`);
    }
   
}

let obj=new movie('AA','BB','');

let obj1=new movie('Casino Royale','Eon Productions','PG­13');
    



 /*  
let newratings=[
{id:1,movie:'KGF',rating:'PG'},
{id:2,movie:'AAA',rating:'PG'},
{id:3,movie:'RRR',rating:'BB'}
]
for (var ele of newratings)
{
    console.log(ele);
} 
console.log(newratings);
console.log(ele.rating);

*/
