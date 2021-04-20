export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type GetUserVariables = {};

export type GetUserQuery = {
  __typename?: "Query";

  me: Maybe<GetUserMe>;
};

export type GetUserMe = {
  __typename?: "User";

  id: number;

  email: string;

  name: Maybe<string>;
};

import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";

// ====================================================
// Components
// ====================================================

export const GetUserDocument = gql`
  query GetUser {
    me {
      id
      email
      name
    }
  }
`;
export type GetUserProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUserQuery, GetUserVariables>
> &
  TChildProps;
export function GetUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
      TProps,
      GetUserQuery,
      GetUserVariables,
      GetUserProps<TChildProps>
    >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetUserQuery,
    GetUserVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, operationOptions);
}
export function useGetUser(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetUserVariables>
) {
  return ReactApolloHooks.useQuery<GetUserQuery, GetUserVariables>(
    GetUserDocument,
    baseOptions
  );
}
