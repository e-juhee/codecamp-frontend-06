import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        name
        picture
      }
      buyer {
        _id
        name
      }
      createdAt
    }
  }
`;
export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        name
        picture
      }
      createdAt
    }
  }
`;
