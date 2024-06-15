import GraphQLService from "../services/graphql";
import { AuthResponseV2, FriendsResponse } from "./types";
import { createClient, fetchExchange, gql } from "urql";

export async function getFriendsList(
  socialAccount: AuthResponseV2
): Promise<FriendsResponse> {
  const client = new GraphQLService(
    `https://graphql.epicgames.com/overlay/graphql`,
    { Authorization: `Bearer ${socialAccount.access_token}` }
  );

  // Define the GraphQL query
  const FRIENDS_QUERY = `
    query friends($displayNames: Boolean) {
      Friends {
        summary(displayNames: $displayNames) {
          friends {
            account {
              id
              displayName
              displayNameType
              externalAuths {
                type
                externalAuthId
                externalAuthIdType
                externalDisplayName
                authIds {
                  id
                  type
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          incoming {
            account {
              id
              displayName
              displayNameType
              externalAuths {
                type
                externalAuthId
                externalAuthIdType
                externalDisplayName
                authIds {
                  id
                  type
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          outgoing {
            account {
              id
              displayName
              displayNameType
              externalAuths {
                type
                externalAuthId
                externalAuthIdType
                externalDisplayName
                authIds {
                  id
                  type
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          blocklist {
            account {
              id
              displayName
              displayNameType
              externalAuths {
                type
                externalAuthId
                externalAuthIdType
                externalDisplayName
                authIds {
                  id
                  type
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
    }
  `;

  // Send the query
  const response: FriendsResponse | null =
    await client.request<FriendsResponse>(FRIENDS_QUERY, {
      displayNames: true,
    });

  if (response.data) return response;

  return null;
}
