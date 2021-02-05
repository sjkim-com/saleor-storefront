/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeaturedProducts
// ====================================================

export interface FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product_product_productvariant {
  __typename: "product_productvariant";
  price_amount: any;
  currency: string | null;
}

export interface FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product_product_category {
  __typename: "product_category";
  id: string;
  name: string;
}

export interface FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product_product_productimages {
  __typename: "product_productimage";
  id: string;
  image: string;
}

export interface FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product {
  __typename: "product_product";
  id: string;
  name: string;
  /**
   * An object relationship
   */
  product_productvariant: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product_product_productvariant | null;
  category_id: number | null;
  /**
   * An object relationship
   */
  product_category: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product_product_category | null;
  /**
   * An array relationship
   */
  product_productimages: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product_product_productimages[];
}

export interface FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts {
  __typename: "product_collectionproduct";
  id: string;
  /**
   * An object relationship
   */
  product_product: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product;
}

export interface FeaturedProducts_site_sitesettings_connection_edges_node_product_collection {
  __typename: "product_collection";
  id: string;
  name: string;
  /**
   * An array relationship
   */
  product_collectionproducts: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts[];
}

export interface FeaturedProducts_site_sitesettings_connection_edges_node {
  __typename: "site_sitesettings";
  homepage_collection_id: number | null;
  /**
   * An object relationship
   */
  product_collection: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection | null;
}

export interface FeaturedProducts_site_sitesettings_connection_edges {
  __typename: "site_sitesettingsEdge";
  node: FeaturedProducts_site_sitesettings_connection_edges_node;
}

export interface FeaturedProducts_site_sitesettings_connection {
  __typename: "site_sitesettingsConnection";
  edges: FeaturedProducts_site_sitesettings_connection_edges[];
}

export interface FeaturedProducts {
  /**
   * fetch data from the table: "site_sitesettings"
   */
  site_sitesettings_connection: FeaturedProducts_site_sitesettings_connection;
}
