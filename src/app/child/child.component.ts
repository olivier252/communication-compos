import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() myMessage1!: string;
  @Input() myVariable!: string;
  @Input() myData1: any[] | undefined;
  @Input() myData2: {} | undefined;
  @Input() myDataObs$: Observable<string> | undefined;
  @Input() myDataFn: string | undefined;

  @Output() sendMessage1: EventEmitter<string> = new EventEmitter<string>();

  counter: number = 0;
  data: string = "Initialisation à partir de l'enfant";
  childProperty: string = "Propriété de childComonent";

  constructor() { }

  ngOnInit(): void {
  }

  clickSendMessage() {
    this.sendMessage1.emit(" Coucou Olivier");
  }

  ngOnChanges(changes: SimpleChanges) {
    // Angular met dans "changes" toutes les variables qui ont été modifiées
    for (const propName in changes) {
      const change = changes[propName];
      if (propName === 'myVariable') {
        console.log('propriété qui a été modifiée=' + propName);
        console.log('ancienne valeur=' + change.previousValue);
        console.log('nouvelle valeur=' + change.currentValue);
      }
    }
  }

  myFunctionChild(): void {
    console.log('myFunctionChild()');
  }

  compteurChild() {
    return ++this.counter;
  }

}
