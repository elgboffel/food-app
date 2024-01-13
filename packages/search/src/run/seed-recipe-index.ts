import "dotenv/config";
import { Database, getAllRecipes } from "database";
import { index } from "../index";
import { RecipeFacet } from "../features/recipes/recipes-index";

async function main() {
  const { db, dispose } = Database.getInstance();

  const recipes = await getAllRecipes(db);
  const mappedRecipes = recipes.map((x) => ({
    ...x,
    categories: x.recipesToCategories.map((y) => y.category.name),
  }));
  await index.recipe.add(mappedRecipes);

  await index.recipe.setFacets([RecipeFacet.Categories]);

  dispose();
}

main();
