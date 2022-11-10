import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output () receipeDetail = new EventEmitter<Recipe>();
  Recipes:Recipe[]=[
    new Recipe('First Recipe','loreum loreumloreumloreumloreum','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recipe('second Recipe','loreum loreumloreumloreumloreum','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recipe('third Recipe','loreum loreumloreumloreumloreum','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),

  ];



  constructor() { }

  ngOnInit(): void {
  }
  onItemSelected(recipe:Recipe){
    this.receipeDetail.emit(recipe)
    console.log(recipe)
  }
  

}
