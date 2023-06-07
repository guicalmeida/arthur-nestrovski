import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.CMS_URL as string, {
  headers: { authorization: process.env.CMS_TOKEN as string },
})
export default client
