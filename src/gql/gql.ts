/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetBlogEntries($first: Int!) {\n    blogEntries(first: $first, orderBy: dateAndTime_DESC) {\n      id\n      title\n      slug\n      content {\n        markdown\n      }\n      dateAndTime\n      featuredImage {\n        id\n        url\n        handle\n      }\n      category\n    }\n  }\n": types.GetBlogEntriesDocument,
    "\n  query GetFeaturedImage($id: ID!, $imageHeight: Int!, $imageWidth: Int!) {\n    blogEntry(where: { id: $id }) {\n      featuredImage {\n        url(transformation: { image: { resize: { height: $imageHeight, width: $imageWidth } } })\n      }\n    }\n  }\n": types.GetFeaturedImageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBlogEntries($first: Int!) {\n    blogEntries(first: $first, orderBy: dateAndTime_DESC) {\n      id\n      title\n      slug\n      content {\n        markdown\n      }\n      dateAndTime\n      featuredImage {\n        id\n        url\n        handle\n      }\n      category\n    }\n  }\n"): (typeof documents)["\n  query GetBlogEntries($first: Int!) {\n    blogEntries(first: $first, orderBy: dateAndTime_DESC) {\n      id\n      title\n      slug\n      content {\n        markdown\n      }\n      dateAndTime\n      featuredImage {\n        id\n        url\n        handle\n      }\n      category\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFeaturedImage($id: ID!, $imageHeight: Int!, $imageWidth: Int!) {\n    blogEntry(where: { id: $id }) {\n      featuredImage {\n        url(transformation: { image: { resize: { height: $imageHeight, width: $imageWidth } } })\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFeaturedImage($id: ID!, $imageHeight: Int!, $imageWidth: Int!) {\n    blogEntry(where: { id: $id }) {\n      featuredImage {\n        url(transformation: { image: { resize: { height: $imageHeight, width: $imageWidth } } })\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;