import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   return {
//     link: httpLink.create({uri}),
//     cache: new InMemoryCache(),
//   };
// }
export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');
    //asdasd
    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });
  const emailauth = setContext((operation, context) => {
    const token = localStorage.getItem('emailtoken');
    //asdasd
    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer2 ${token}`,
        },
      };
    }
  });

  const link = ApolloLink.from([
    basic,
    auth,
    emailauth,
    httpLink.create({ uri }),
  ]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
