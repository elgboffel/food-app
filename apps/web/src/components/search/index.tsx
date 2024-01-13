"use client";

import React from "react";
import {
  InstantSearch,
  Hits,
  SortBy,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Snippet,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { RecipeFacet } from "search/src/features/recipes/recipes-index";

const searchClient = instantMeiliSearch(
  "http://localhost:7700/",
  "MASTER_KEY",
  {
    finitePagination: true,
  },
);

export const Search = () => (
  <div>
    <h1>MeiliSearch + React InstantSearch</h1>
    <InstantSearch indexName="recipe" searchClient={searchClient.searchClient}>
      <div className="left-panel">
        <ClearRefinements />
        {/*<SortBy*/}
        {/*  defaultRefinement="steam-video-games"*/}
        {/*  items={[*/}
        {/*    { value: "steam-video-games", label: "Relevant" },*/}
        {/*    {*/}
        {/*      value: "steam-video-games:recommendationCount:desc",*/}
        {/*      label: "Most Recommended",*/}
        {/*    },*/}
        {/*    {*/}
        {/*      value: "steam-video-games:recommendationCount:asc",*/}
        {/*      label: "Least Recommended",*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*/>*/}
        <h2>Categories</h2>
        <RefinementList attribute={RecipeFacet.Categories} />
        <Configure
          hitsPerPage={12}
          attributesToSnippet={["description:50"]}
          snippetEllipsisText={"..."}
        />
      </div>
      <div className="right-panel">
        <SearchBox />
        <Hits hitComponent={Hit} />
        <Pagination showLast={true} />
      </div>
    </InstantSearch>
  </div>
);

// @ts-ignore
const Hit = ({ hit }) => (
  <a href={hit.url} target={"_blank"} key={hit.id}>
    <div className="hit-name">
      <Highlight attribute="title" hit={hit} />
    </div>
    <img src={hit.image} alt={hit.name} />
    {/*<div className="hit-description">*/}
    {/*  <Snippet attribute="description" hit={hit} />*/}
    {/*</div>*/}
  </a>
);
