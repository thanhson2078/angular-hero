import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  age;
  constructor(private common: CommonService) {
    this.age = this.common.age;
  }

  ngOnInit(): void {}

  ageIncrease() {
    this.common.age++;
    this.age = this.common.age;
  }
  ageDecrease() {
    this.common.age--;
    this.age = this.common.age;
  }
}
