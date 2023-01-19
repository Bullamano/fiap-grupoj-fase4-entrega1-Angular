import { Component, Input, OnInit } from '@angular/core';
import { ITutorial } from '../tutorials/tutorial';

/**
 * Home page do site com os tutoriais presentes vindos da API
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  /**
   * Objeto de tutorial para mapear o que vier da API
   */
  @Input()
  resultsAPI!: ITutorial[];

  /**
   * Booleano indicando se a API foi chamada com sucesso
   */
  @Input()
  didCallAPI!: boolean;

  constructor() {
    this.resultsAPI = [];
    this.didCallAPI = false;
  }

  ngOnInit() {
    
    try{
      //Chamada à API com a lista de tutoriais
      fetch('http://127.0.0.1:8080/api/v1/tutorialItem')
      .then(r => r.json())
      .then(j => {
        
        //Resultados da API são colocados em Array
        //para serem mostrados na tela
        j.forEach((p: any) => {
          this.resultsAPI.push(p);
        });
        
        //API foi chamada com sucesso
        this.didCallAPI = true;
      });
    }
    catch{
      //API não foi chamada com sucesso
      this.didCallAPI = false;
    }
  }

  /**
   * Função de clique para chamada do teste CORS
   */
  buttonOutClicked() {
    try {
      //Chamada à API de teste CORS
      fetch(
        'http://localhost:666/api/v1/simple-data',
        {
          method: "GET",
        }
      )
        .then(r => r.json())
        .then(j => {

          //Resultado da chamada ajustado para visualização
          let s = JSON.stringify(j, null, 2);

          //Resultado mostrado através de alert
          alert(s);
        })
        .catch((error) => {
          //Erro na chamada retornado pela API
          alert('Erro ao contatar a API de teste CORS! Verifique se o projeto presente em https://github.com/Bullamano/fiap-grupoj-fase4-entrega1-SimpleApp está rodando corretamente.');
        });
    }
    catch {
      //Erro na chamada da API
      alert('Erro ao contatar a API de teste CORS! Verifique se o projeto presente em https://github.com/Bullamano/fiap-grupoj-fase4-entrega1-SimpleApp está rodando corretamente.');
    }
  }

}
