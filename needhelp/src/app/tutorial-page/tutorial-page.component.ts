import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ITutorial } from '../tutorials/tutorial';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.css']
})
export class TutorialPageComponent implements OnInit {

  @Input()
  tutorialId!: number;

  @Input()
  resultsAPI!: ITutorial;

  @Input()
  didCallAPI!: boolean;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(parameter => this.tutorialId = parameter['id']);
  }

  ngOnInit() {
    try {
      fetch('http://127.0.0.1:8080/api/v1/tutorialItem/' + this.tutorialId)
        .then(r => r.json())
        .then(j => {

          this.resultsAPI = j;

          console.log(this.resultsAPI)

          this.didCallAPI = true;
        });
    }
    catch {
      this.didCallAPI = false;
    }
  }

}
