import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  private ingredients:Ingredient[]=[
    new Ingredient ("Tomatoes" , 3),
    new Ingredient ("apple" , 5),
    new Ingredient ("bannana" , 7),
  ];
  onAddIngredient = new EventEmitter<Ingredient>();
  onIngredientChanged = new Subject<Ingredient[]>();

  getAllIngredientList(){
    return this.ingredients.slice();
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.onIngredientChanged.next(this.ingredients.slice())
  }
  passIngredient(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.onIngredientChanged.next(this.ingredients.slice())
    console.log(this.ingredients)
  }
  constructor() { }
}
