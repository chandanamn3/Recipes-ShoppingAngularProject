import {  Injectable } from "@angular/core";
import { Subject } from "rxjs" ;

import { Ingredient } from "../shared/ingrediant.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
   recipesChanges = new Subject<Recipe[]>(); 
  private  recipes: Recipe[] =[
        new Recipe('Burger',
        'Tasty and Yummy Big Burger',
        'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
        [new Ingredient('Meat',1),
        new Ingredient('Bun',2),
        new Ingredient('Tomato',1),
        new Ingredient('Cucumber',1)],
        ),

        new Recipe('Chicken ',
        'Yummy Chicken Curry',
        'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
        [new Ingredient('Chicken',10),new Ingredient('Onions',8)]),
        new Recipe('Pizza ',
        'Cheese Burst Large Pizza',
        'https://www.localsamosa.com/wp-content/uploads/2019/04/pizza-restaurants.png',
        [new Ingredient('Chicken',5),new Ingredient('Cheese',3),
        new Ingredient('olives',5),new Ingredient('Tomato',3)])
      ]; 
      
      
      constructor(private slService:ShoppingListService){

      }

      getRecipes()
      {
        return this.recipes.slice();
      }
      getRecipe(index:number)
      {
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[])
      {
         this.slService.addIngredients(ingredients);

      }

      addRecipe(recipe:Recipe){
         this.recipes.push(recipe);
         this.recipesChanges.next(this.recipes.slice());
      }

      updateRecipe(index:number ,newRecipe:Recipe){
            this.recipes[index] = newRecipe;
            this.recipesChanges.next(this.recipes.slice());
      }

      deleteRecipes(index:number)
        {this.recipes.splice(index,1);
            this.recipesChanges.next(this.recipes.slice());

        }
      
}