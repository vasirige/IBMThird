import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Actor} from '../../models/actor.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  actor : Actor;

 
  @Input() childCount: number;
  // This says that there is an attribute by the name
  // childCount in the child component's tag (used by
  // the parent)
  // child to retrive the data which is passed by parent bu attributes.
  // child to parent communication is done through using event and send associated data.

  @Output() countChanged = new EventEmitter<number>(); // countChanged is custom attribte name name as EventEmitter.
  @Output() actorCreted = new EventEmitter<Actor>(); 

  constructor() { }

  ngOnInit() {
   this.actor = {name:'', city:''};
  }

  incrementCount() {
    ++this.childCount;
    this.countChanged.emit(this.childCount);
  }

  decrementCount() {
    --this.childCount;
    this.countChanged.emit(this.childCount);
  }

  addActor(){
    this.actorCreted.emit(this.actor);
    this.actor =  {name:'', city:''};
  }
}
