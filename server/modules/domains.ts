import {gql} from 'apollo-server-micro';

const typeDefs = gql`
  type Song {
    id: String!
    number: String!
    title: String!
    singer: String!
    karaoke: Karaoke!
  }

  input SearchFilter {
    searchBy: SearchBy = TITLE
    keyword: String!
    karaoke: Karaoke!
    page: Int!
  }

  enum Karaoke {
    KY
    TJ
  }

  enum SearchBy {
    NUMBER
    TITLE
    SINGER
  }
`;

const domains = {typeDefs};

export default domains;
