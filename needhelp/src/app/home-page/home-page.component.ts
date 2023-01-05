import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  ngOnInit() {
    //TODO teste apenas para pegar os itens
    //fetch('http://127.0.0.1:8080/api/v1/tutorialItem').then(r => r.json()).then(j => { console.log(j); });
  }

}

