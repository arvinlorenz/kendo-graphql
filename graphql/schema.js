const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type Version {
      _id: ID!
      text: String!
      data: String
      items: [Version]
      createdAt: String
      updatedAt: String
    }



    input VersionInputData {
      date: String!
      time: String!
      data: String!
    }
    type RootQuery {
      getVersions: [Version]
    }
    type RootMutation {
      addVersion(versionInput: VersionInputData): Version!
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);
