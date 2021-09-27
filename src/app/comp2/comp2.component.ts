import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Stored1Service } from '../services/stored1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  messageSubject!: BehaviorSubject<string>; 
  subjectIUser!: Subject<string>;
  stringVariable: string = this.stored1Service.getStringVariable();
  
  
  constructor(private stored1Service: Stored1Service) { }

  ngOnInit(): void {

  }

  getMessage1() {
    return this.stored1Service.getMessage1();
  }

  cliqueUpdateService(): void {
    this.stored1Service.setMessage1("modification texte par variable");
  }

  cliqueUpdateObservable(): void {
    this.stored1Service.emitMessageSubject("modification par observable");
    this.subjectIUser = this.stored1Service.getMessageSubject();
  }
}
