import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ITutorial } from '../tutorials/tutorial';

/**
 * Página para cada tutorial vindo da API
 */
@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.css']
})
export class TutorialPageComponent implements OnInit {

  /**
   * ID do tutorial
   */
  @Input()
  tutorialId!: number;

  /**
   * Objeto tutorial populado pela API
   */
  @Input()
  resultsAPI!: ITutorial;

  /**
   * Booleano indicando se a API foi chamada com sucesso
   */
  @Input()
  didCallAPI!: boolean;

  constructor(private route: ActivatedRoute) {
    //Rota da API (ID do registro) na URL
    this.route.params.subscribe(parameter => this.tutorialId = parameter['id']);
  }

  ngOnInit() {
    try {
      //Chamada da API
      fetch('http://127.0.0.1:8080/api/v1/tutorialItem/' + this.tutorialId)
        .then(r => r.json())
        .then(j => {

          //Tutorial retornado pela API popula objeto de resultado
          this.resultsAPI = j;

          //API chamada com sucesso
          this.didCallAPI = true;
        });
    }
    catch {
      //API não chamada com sucesso
      this.didCallAPI = false;
    }
  }

}
