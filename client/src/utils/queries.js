import { gql } from '@apollo/client';

export const LIST_COUNTRIES = gql`
{
  countries {
    code
    name
  }
}
`;

export const COUNTRY = gql`
{
  country(code: "BR") {
    name
    states{
      name
    }
    continent {
      code
      name
    }
  }
}
`






