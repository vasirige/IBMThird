import { Component, OnInit } from '@angular/core';

import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCount: number;
  message: string;
  actor: Actor;

  constructor() { }

  ngOnInit() {
    this.parentCount = 10;
    this.message = `Child count initialized to ${this.parentCount}`;
  }

  onCountChanged(eventData) {
    this.parentCount = eventData;
    this.message = `Child count changed to ${this.parentCount}`;
  }

  onActorCreated(eventData) {
    this.actor = eventData;
    // alert(`Actor object created with name ${this.actor.name} and city ${this.actor.city}`);
    this.message = 
    `Actor object created with name ${this.actor.name} and city ${this.actor.city}`;
  }
}
