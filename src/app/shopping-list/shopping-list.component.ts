import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass'],
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  ingredients:Ingredient[];
  private onIngredientChangedSubscription:Subscription;
  constructor(private shoppingList:ShoppingListService , private route:ActivatedRoute) { 
  }
  ngOnDestroy(): void {
    this.onIngredientChangedSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.ingredients=this.shoppingList.getAllIngredientList();
    this.onIngredientChangedSubscription=this.shoppingList.onIngredientChanged
    .subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients=ingredients 
      }
    );

  }
 
}
