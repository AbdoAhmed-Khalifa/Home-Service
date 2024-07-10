import request, { gql } from 'graphql-request';
import { GraphCategoriesType } from '../_types/graphCategoriesType';
import { BusinessListsType } from '../_types/businessListsType';
import { BusinessListType } from '../_types/businessListType';

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
  return result.businessLists;
}

async function getBusinessByCategory(
  category: string
): Promise<BusinessListsType> {
  const query =
    gql`
  query MyQuery {
  businessLists(where: {category: {name: "` +
    category +
    `"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`;

  const result = (await request(MASTER_URL, query)) as {
    businessLists: BusinessListsType;
  };

  return result.businessLists;
}

async function getBusinessById(businessId: string): Promise<BusinessListType> {
  const query =
    gql`
    query getBusinessById {
      businessList(where: { id: "` +
    businessId +
    `" }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const result = (await request(MASTER_URL, query)) as {
    businessList: BusinessListType;
  };

  return result.businessList;
}

export {
  getAllCategories,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
};
