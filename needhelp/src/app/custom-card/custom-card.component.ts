import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent {
  @Input()  
  id!: number;

  @Input()
  title!: String;
  
  @Input()
  imageUrl!: String;

  constructor() {

  }

  ngOnInit() {
    //On init get info from API
  }
}
