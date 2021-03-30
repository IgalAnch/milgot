// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    user: IUser;
  }

  interface IUserOnQueryArguments {
    id: number;
  }

  interface IUser {
    __typename: 'User';
    id: number | null;
    idNumber: number | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    previousLastName: string | null;
    birthYear: number | null;
    gender: string | null;
    password: string | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    register: IUser;
  }

  interface IRegisterOnMutationArguments {
    gender: string;
    previousLastName: string;
    lastName: string;
    firstName: string;
    password: string;
    username: string;
  }
}

// tslint:enable
