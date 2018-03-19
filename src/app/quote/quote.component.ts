import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'
@Component({
selector: 'app-quote',
templateUrl: './quote.component.html',
styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes= [
  new Quote(1,'Bill Clinton','The people in your life should be a source of reducing stress, not causing more of it.',),
  new Quote(2,'Vicklyne Oswago', 'people will forget what you said,they will forget what you did but they will never forget how you made them fill.'),
];

toogleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
deleteQuotes(isComplete,index){
 if (isComplete){
   let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
           if(toDelete){
          this.quotes.splice(index,1);
     }
     }
   }

addNewQuotes(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.push(quote)
}
constructor() { }

ngOnInit() {
}

}
