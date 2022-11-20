import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit , OnDestroy{
  recipeDetail:Recipe;
  getRecipeSubscription:Subscription;

  constructor(private shoppingListService:ShoppingListService ,
              private recipeService:RecipeService ,
              private route:ActivatedRoute,
              private router:Router) { 
  }

  ngOnInit(): void {
   this.getRecipeSubscription=this.route.params.subscribe(
      (params:Params) => {
        this.recipeDetail=this.recipeService.getRecipeById(params['id'])
      }
    );
  }
  ngOnDestroy(){
    this.getRecipeSubscription.unsubscribe();
  }
  addShoppingList(){
    this.shoppingListService.passIngredient(this.recipeDetail.ingredients)
  }
  
  onRecipeEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
