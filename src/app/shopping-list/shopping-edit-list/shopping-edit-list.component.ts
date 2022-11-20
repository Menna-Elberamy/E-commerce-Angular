import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit-list',
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.sass'],
})
export class ShoppingEditListComponent implements OnInit {
  @ViewChild('inputName') inputNameRef:ElementRef;
  @ViewChild('inputAmount') inputAmountRef:ElementRef;
  isDisabled: boolean = true;



  constructor(private shoppingList:ShoppingListService) { }

  ngOnInit(): void {
  }


  addIngredient(){
    const inputName=this.inputNameRef.nativeElement.value;
    const inputAmount=this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredient(inputName,inputAmount)
    this.shoppingList.onIngredientAdded(ingredient)
    console.log(ingredient)
    return false
  }
  



}