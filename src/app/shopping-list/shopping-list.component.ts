import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Ingredient[]=[
    new Ingredient ("Tomatoes" , 3),
    new Ingredient ("apple" , 5),
    new Ingredient ("bannana" , 7),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(Ingredient:Ingredient){
    this.Ingredients.push(Ingredient)
  }
}
