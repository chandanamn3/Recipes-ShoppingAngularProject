
import { Ingredient } from "../shared/ingrediant.model";
import {Subject } from 'rxjs';
export class ShoppingListService{
    ingdredientChanged= new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
   private ingredients: Ingredient[]  = [
        new Ingredient('Apple',5),
        new Ingredient('Tomato',10)
    ]; 
  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return  this.ingredients[index];
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingdredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[])
  {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingdredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingdredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingdredientChanged.next(this.ingredients.slice());

  }
}