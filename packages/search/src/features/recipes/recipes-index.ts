import { client } from "../../client";
import { RecipeWithRelations } from "database/src/schema";

export const RECIPES_INDEX = "recipe";

export type RecipeDocument = RecipeWithRelations;

const add = async (recipes: RecipeDocument[]) => {
  return await client.index(RECIPES_INDEX).addDocuments(recipes);
};

export enum RecipeFacet {
  Categories = "categories",
}

const setFacets = async (facets: RecipeFacet[]) => {
  return await client.index(RECIPES_INDEX).updateFilterableAttributes(facets);
};

export const recipe = {
  add,
  setFacets,
};
