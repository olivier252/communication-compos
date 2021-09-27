import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { IUser } from '../models/i-user';
import { Stored1Service } from '../services/stored1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnDestroy {

  messageSubject!: BehaviorSubject<string>;
  messageSubscription!: Subscription;
  message!: string;
  choice1Subject!: BehaviorSubject<IUser>;
  choice2Subject!: BehaviorSubject<IUser>;
  subjectIUser!: Subject<IUser>;
  stringVariable!: string;

  constructor(private stored1Service: Stored1Service) { }

  ngOnInit(): void {
    this.messageSubject = this.stored1Service.getMessageSubject();
    this.messageSubscription = this.stored1Service.getMessageSubject().subscribe((x) => {
      this.message = x;
    });
    this.stored1Service.setStringVariable("nouvelle string");
    this.stringVariable = this.stored1Service.getStringVariable();
  }

  getMessage1(): string {
    return this.stored1Service.getMessage1();
  }

  choice(nb: number): void {
    const data1: IUser = {
      name: 'oliv',
      firstname: 'chini',
      genre: 'monsieur'
    }

    const data2: IUser = {
      name: 'vanessa',
      firstname: 'jesné',
      genre: 'madame'
    }

    if (nb === 1) {
     this.stored1Service.emitDataSubject(data1);
    } else if (nb === 2) {
      this.stored1Service.emitDataSubject(data2);
    }
    this.subjectIUser = this.stored1Service.getDataSubject();
  }

  getIUser() {
    return this.subjectIUser;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

}
