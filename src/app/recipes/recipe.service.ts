import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  private Recipes:Recipe[]=[
    new Recipe(0,
      'Fish Stew','loreum loreumloreumloreumloreum',
      'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?s=612x612&w=0&k=20&c=ChDQJpRhCd7vCaoKOMC9QHNkHBeTOXrl4mUKdXrbCik=',
      [new Ingredient('Burger',10) , new Ingredient('Chesse',10) ]
      ),
      new Recipe(1,
        'Sanket Sah','loreum loreumloreumloreumloreum',
        'https://media.istockphoto.com/id/1143464685/photo/shrimps-in-coconut-sauce-and-white-rice.jpg?s=612x612&w=0&k=20&c=fOuYi4RjExhAy1uFiZ5VSQiR_46fHXt6bn9nre6qmHI=',
        [new Ingredient('Burger',10)
      ]
        ),
      new Recipe(2,
        'Chicken 555','loreum loreumloreumloreumloreum',
        'https://media.istockphoto.com/id/1226369816/photo/indian-cuisine-dinner-tandoori-chicken-biryani.jpg?s=612x612&w=0&k=20&c=pZ-apu_GPYOVaW_awEDwh_G5GJez7P91K8kb-e-Cu2M=',
        [new Ingredient('Burger',10)]
        ),
  ];
  receipeDetail = new Subject<Recipe>();

  constructor() { }
  getAllRecipes(){
    return this.Recipes.slice();
  }
  getRecipeById(id:number){
    return this.Recipes.slice()[id]
  }
}
