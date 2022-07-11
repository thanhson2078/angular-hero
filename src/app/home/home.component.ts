import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'Son';
  age;
  assassins = ['Altair', 'Ezio', 'Connor', 'Haytham', 'Edward'];

  constructor(private common: CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {}

  ageDecrease() {
    this.common.age--;
    this.age = this.common.age;
    if (this.age === 21) {
      this.name = 'Phu';
    } else {
      this.name = 'Son';
    }
    this.assassins.push(this.name + ':' + this.age);
  }
  ageIncrease() {
    this.common.age++;
    this.age = this.common.age;
    if (this.age === 23) {
      this.name = 'Nhoc Ac';
    } else {
      this.name = 'Son';
    }
  }
}
