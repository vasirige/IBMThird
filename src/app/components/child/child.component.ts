import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html/',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input() childCount: number;
  // This says that there is an attribute by the name
  // childCount in the child component's tag (used by
  // the parent)

  @Output() actorCreated = new EventEmitter<Actor>();
  @Output() countChanged = new EventEmitter<number>();

  actor: Actor;

  constructor() { }

  ngOnInit() {
    this.actor = { name: '', city: ''};
  }

  incrementCount() {
    ++this.childCount;
    this.countChanged.emit(this.childCount);
  }

  decrementCount() {
    --this.childCount;
    this.countChanged.emit(this.childCount);
  }

  createActor() {
    this.actorCreated.emit(this.actor);
  }
}
