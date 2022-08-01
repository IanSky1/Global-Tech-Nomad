import { gql } from '@apollo/client';

export const QUERY_COUNTRIES = gql`
{
    country(code: "BR"){
      name
      capital
      emoji
      currency
      states{
        name
      }
      continent{
        code
        name
        countries{
          name
        }
      }
    }
  }
`

// export const QUERY_CONTINENTS = gql`
// `