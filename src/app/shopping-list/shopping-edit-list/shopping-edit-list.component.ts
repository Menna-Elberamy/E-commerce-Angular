import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit-list',
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.sass']
})
export class ShoppingEditListComponent implements OnInit {
  @ViewChild('inputName') inputNameRef:ElementRef;
  @ViewChild('inputAmount') inputAmountRef:ElementRef;
  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  isDisabled: boolean = true;



  constructor() { }

  ngOnInit(): void {
  }


  addIngredient(){
    const inputName=this.inputNameRef.nativeElement.value;
    const inputAmount=this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredient(inputName,inputAmount)
    this.onAddIngredient.emit(ingredient);
    console.log(ingredient)
    return false
  }
  



}