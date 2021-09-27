import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class Stored1Service {

  private message1 = 'variable du service';
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('voici un behaviorsubject');
  private dataSubject: Subject<IUser> = new Subject<IUser>();
  private stringVariable: string = "variable de base";

  constructor() { }

  getMessage1() {
    return this.message1;
  }

  setMessage1(message1: string): void {
    this.message1 = message1;
  }

  getStringVariable() {
    return this.stringVariable;
  }

  setStringVariable(str: string) {
    this.stringVariable = str;
  }

  getMessageSubject() {
    return this.messageSubject;
  }

  emitMessageSubject(str: string) {
    this.messageSubject.next("nouveau behaviorSubject");
  }

  getDataSubject() {
    return this.dataSubject;
  }

  emitDataSubject(user: IUser): void {
    this.dataSubject.next(user);
  }

  subjectIUser() {
    return this.dataSubject;
  }

}
