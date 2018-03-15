import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";

@Injectable()
export class DataStorageService {
    
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();

        // return this.httpClient.put('https://ng-recipe-book-17e69.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        //     // headers: new HttpHeaders().set('Authorization', 'blablabla')
        // });
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-17e69.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true
            // params: new HttpParams().set('auth', token)
        });
        return this.httpClient.request(req);
    }

    getRecipes() {
        const token = this.authService.getToken();

        //return this.httpClient.get<Recipe[]>('https://ng-recipe-book-17e69.firebaseio.com/recipes.json?auth=' + token)
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-17e69.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        })
        .map(
            (recipes) => {
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}