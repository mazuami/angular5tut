import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 1, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true})
      ])
  ] )
  ]
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  countOfItems: number = 4;
   // tslint:disable-next-line:no-inferrable-types
  btnText: string = 'Add Item';
   // tslint:disable-next-line:no-inferrable-types
   goalText: string = 'First life goal';
  goals = [];
  constructor( private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.countOfItems = this.goals.length;
  }

  addItems() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.countOfItems = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
