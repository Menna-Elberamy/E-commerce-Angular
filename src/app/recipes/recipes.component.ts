import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
 
  title:string=''; description:string='' ; imagePath:string ='';
  selectedDetails:Recipe
  constructor() { }

  ngOnInit(): void {

  }
  emitReceipeDetail(recipe:Recipe){
   this.selectedDetails={
    title:recipe.title,
    description:recipe.description,
    imagePath:recipe.imagePath
   }

  }

  

}
