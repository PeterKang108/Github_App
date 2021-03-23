import axios, { get } from '../utils/request'
import client from '../utils/graphql'
import gql from 'graphql-tag';

/**
 * get user info from github
 * @param token
 */
export const getUserInformation = (token:string):Promise<any>=> {
  return client.query({
    query: gql(`
    query { 
      viewer { 
        login
        email
        name
        avatarUrl
        bio
        repositories{
          totalCount
        }
        url,
        createdAt
        followers {
          totalCount
        }
        following {
          totalCount
        }
      }
   }
    `),
    variables: {
      token
    }
  })
}

/**
 * get user repos from github
 * @param token api access
 */
 export const getRepo = (token:string):Promise<any> => {
  return  client.query({
    query: gql(`
    query { 
      viewer{
        repositories(first: 50){
          nodes {
              name
              description
              createdAt
              url
              homepageUrl
              owner {
                login
              }
          }
        }
      }
  }
    `),
    variables: {
      token
    }
  })
}

/**
 * get user info from github
 * @param token
 */
export const getUserInformationApi = (token:string):Promise<any>=> {
  return axios.get('/user', { headers: { Authorization: 'Bearer ' + token } })
}

/**
 * get user repos from github
 * @param user GitHub user
 * @param token api access
 */
 export const getReposApi = (user:string , token:string):Promise<any> => {
  return axios.get(`/users/${user}/repos`, {
    headers: { Authorization: 'Bearer ' + token }
  })
}
