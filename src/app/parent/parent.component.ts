import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  variable1: string = 'Avant le changement';
  data1 = [10, 'coucou', 30];
  data2 = { name: 'joe', firstname: 'black' };
  dataObs$: Observable<string> = of('text from observable A');
  messageReceptionFromChild: string | undefined;
  propertyFromChild!: string;

  // Exemple accès au composant intégral
  @ViewChild(ChildComponent, { static: true }) child1!: ChildComponent;

  // Exemple accès à un élément du DOM
  @ViewChild('child2', {read: ElementRef, static: false}) childElementRef!: ElementRef;

  @ViewChild('someInput') someInput!: ElementRef; 

  fromChild!: string;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

    // A ce stade, tous les composants enfants ont été initialisés et vérifiés.
  ngAfterViewInit() {
    console.log("*** cycle ngAfterViewInit***");
    console.log(this.child1.childProperty);
    this.child1.childProperty = "Danger, voici une nouvelle valeur dans ParentComponent !"
    console.log(this.child1.childProperty);
    console.log(this.childElementRef.nativeElement);
    this.childElementRef.nativeElement.style.color = 'pink';

    console.log(this.someInput);                                            // aller voir le contenu dans la console
    this.someInput.nativeElement.value = 'du parent';


  }

  dataFn() {
    return 'text from function';
  }

  compteurChildFromParent() {
    this.counter = this.child1.compteurChild();
  }

  receptionFromChild(event: string) {
    this.messageReceptionFromChild = event;
  }

  clickUpdateMyMessage() {
    this.variable1 = "********** MODIFIED !!! ************";
  }

}
