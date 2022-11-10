import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail:Recipe

  constructor() { 
  }

  ngOnInit(): void {
    console.log("redcpi")
    console.log(this.recipeDetail)

  }
  

}
