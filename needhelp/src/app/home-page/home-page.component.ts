import { Component, Input, OnInit } from '@angular/core';
import { ITutorial } from '../tutorials/tutorial';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input()
  resultsAPI!: ITutorial[];

  @Input()
  didCallAPI!: boolean;

  constructor() {
    this.resultsAPI = [];
    this.didCallAPI = false;
  }

  ngOnInit() {
    try{
      fetch('http://127.0.0.1:8080/api/v1/tutorialItem')
      .then(r => r.json())
      .then(j => {
        //console.log(j);
        
        j.forEach((p: any) => {
          this.resultsAPI.push(p);
        });
        
        //console.log(this.resultsAPI)
        
        this.didCallAPI = true;
      });
    }
    catch{
      this.didCallAPI = false;
    }
  }

}

