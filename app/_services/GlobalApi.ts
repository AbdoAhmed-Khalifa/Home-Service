import request, { gql } from 'graphql-request';
import { GraphCategoriesType } from '../_types/graphCategoriesType';
import { BusinessListsType } from '../_types/businessListsType';

const MASTER_URL = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`;

async function getAllCategories(): Promise<GraphCategoriesType> {
  const query = gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
        bgcolor
      }
    }
  `;
  // await new Promise(res => setTimeout(res, 2000));
  const result = (await request(MASTER_URL, query)) as GraphCategoriesType;

  return result;
}

async function getAllBusinessList(): Promise<BusinessListsType> {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        contactPerson
        email
        images {
          url
        }
        id
        name
        category {
          name
        }
      }
    }
  `;

  const result = (await request(MASTER_URL, query)) as {
    businessLists: BusinessListsType;
  };
  // await new Promise(res => setTimeout(res, 10000));
  console.log(result.businessLists);
  return result.businessLists;
}
export { getAllCategories, getAllBusinessList };
