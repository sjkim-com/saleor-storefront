/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductsList
// ====================================================

export interface ProductsList_site_sitesettings_connection_edges_node_django_site {
  __typename: "django_site";
  id: string;
  name: string;
}

export interface ProductsList_site_sitesettings_connection_edges_node_product_collection {
  __typename: "product_collection";
  id: string;
  name: string;
  background_image: string | null;
  background_image_alt: string;
  description: string;
}

export interface ProductsList_site_sitesettings_connection_edges_node {
  __typename: "site_sitesettings";
  site_id: number;
  description: string;
  homepage_collection_id: number | null;
  /**
   * An object relationship
   */
  django_site: ProductsList_site_sitesettings_connection_edges_node_django_site;
  /**
   * An object relationship
   */
  product_collection: ProductsList_site_sitesettings_connection_edges_node_product_collection | null;
}

export interface ProductsList_site_sitesettings_connection_edges {
  __typename: "site_sitesettingsEdge";
  node: ProductsList_site_sitesettings_connection_edges_node;
}

export interface ProductsList_site_sitesettings_connection {
  __typename: "site_sitesettingsConnection";
  edges: ProductsList_site_sitesettings_connection_edges[];
}

export interface ProductsList_product_category_connection_edges_node {
  __typename: "product_category";
  id: string;
  name: string;
  background_image: string | null;
  background_image_alt: string;
}

export interface ProductsList_product_category_connection_edges {
  __typename: "product_categoryEdge";
  node: ProductsList_product_category_connection_edges_node;
}

export interface ProductsList_product_category_connection {
  __typename: "product_categoryConnection";
  edges: ProductsList_product_category_connection_edges[];
}

export interface ProductsList {
  /**
   * fetch data from the table: "site_sitesettings"
   */
  site_sitesettings_connection: ProductsList_site_sitesettings_connection;
  /**
   * fetch data from the table: "product_category"
   */
  product_category_connection: ProductsList_product_category_connection;
}
