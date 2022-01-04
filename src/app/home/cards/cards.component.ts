import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  cards=[
    {"title":'Shiba Inu',"breed":'Dog Breed',"image":"https://material.angular.io/assets/img/examples/shiba2.jpg",
    "content":'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'},
    {"title":'Shiba Inu',"breed":'Dog Breed',"image":"https://material.angular.io/assets/img/examples/shiba2.jpg",
    "content":'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'},
    {"title":'Shiba Inu',"breed":'Dog Breed',"image":"https://material.angular.io/assets/img/examples/shiba2.jpg",
    "content":'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'}
  ];

  ngOnInit(): void {
  }

}
