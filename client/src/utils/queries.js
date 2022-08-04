import { gql } from '@apollo/client';

export const LIST_COUNTRIES = gql`
{
  countries {
    code
    name
  }
}
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;






