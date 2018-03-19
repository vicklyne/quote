import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
selector: 'app-quote-form',
templateUrl: './quote-form.component.html',
styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

newQuotes = new Quote(0,'','');
@Output() addQuotes=new EventEmitter<Quotes>();

submitQuotes(){
  this.addQuote.emit(this.newQuotes);
}

constructor() { }

ngOnInit() {
}

}
