import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit ,OnDestroy{
  recipeEditId:number;
  EditMode:boolean=false;
  private RouteSubscription:Subscription;

  constructor(private route:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.RouteSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) =>{
        this.recipeEditId=params['id'];
        this.EditMode=params['id'] !=null;
        console.log(this.EditMode)
      }
    )
  }

}
