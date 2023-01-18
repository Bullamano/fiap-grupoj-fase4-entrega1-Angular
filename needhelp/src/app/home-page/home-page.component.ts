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

  buttonOutClicked() {
    try {
      fetch(
        'http://localhost:666/api/v1/simple-data',
        {
          method: "GET",
        }
      )
        .then(r => r.json())
        .then(j => {

          let s = JSON.stringify(j, null, 2);

          alert(s);
        })
        .catch((error) => {
          alert('Erro ao contatar a API de teste CORS! Verifique se o projeto presente em https://github.com/Bullamano/fiap-grupoj-fase4-entrega1-SimpleApp está rodando corretamente.');
        });
    }
    catch {
      alert('Erro ao contatar a API de teste CORS! Verifique se o projeto presente em https://github.com/Bullamano/fiap-grupoj-fase4-entrega1-SimpleApp está rodando corretamente.');
    }
  }

}

