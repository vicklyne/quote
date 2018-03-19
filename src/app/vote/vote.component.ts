import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
selector: 'app-vote',
templateUrl: './vote.component.html',
styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

@Output() isComplete = new EventEmitter<boolean>();

quotes= [
  new Quote(1, 'Rose', 'Live and let others live', ),
  new Quote(2, 'Rosie', 'Giving up is not the option'),
  new Quote(3, 'Perez','Life is a journey just keep going'),
];

uvotes = 0;
dvotes = 0;

upVote(){
  this.uvotes = this.uvotes + 1;
}

downVote(){
  this.dvotes = this.dvotes + 1;
}


constructor() { }

ngOnInit() {
}

}
