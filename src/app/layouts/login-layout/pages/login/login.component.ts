import { Component } from '@angular/core';
import { Apollo, gql, APOLLO_OPTIONS } from 'apollo-angular';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginLayoutService } from '../../login-layout.service';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private apollo: Apollo,
    private router: Router,
    private loginLayoutService: LoginLayoutService
  ) {
    loginLayoutService.login_email = '';
  }

  error = 'none';
  success = 'none';

  /*
  try to create another apollolink with a different header bearer token attachment
  */

  input_user2 = gql`
    query OK($email: String!) {
      isEmail(email: $email) {
        id
        idNumber
        gender
        birthYear
        previousLastName
        lastName
        firstName
        password
        username
        email
      }
    }
  `;

  onSubmit(c: any) {
    console.log(c.form.value);

    let vars = { email: c.form.value.email };
    // let user_vars = {
    //   email: vars.email,
    // };
    this.apollo
      .watchQuery({ query: this.input_user2, variables: vars })
      .valueChanges.subscribe(
        (result: any) => {
          console.log(result);
          localStorage.setItem('emailtoken', result.data.isEmail.firstName);

          this.error = 'none';
          this.success = 'block';
          this.loginLayoutService.login_email = vars.email;
          setTimeout(() => {
            this.router.navigate(['code']);
          }, 1000);
        },
        (error) => {
          console.log('ERROR');
          this.error = 'none'; //reset before giving error. to imply subsequent input is incorrect
          setTimeout(() => {
            this.error = 'block';
          }, 50);
        }
      );
  }

  ok() {
    console.log('2nd button'); //z
    let query2 = gql`
      query newTest($id: Int!) {
        user(id: $id) {
          id
          gender
          username
          password
          firstName
          lastName
          previousLastName
        }
      }
    `;
    let vars = {
      id: 1,
    };
    let ap = this.apollo
      .watchQuery({
        query: query2 /*this.GET_PRODUCT*/,
        variables: vars,
        fetchPolicy:
          'network-only' /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.user))
      .subscribe((result) => {
        console.log('result: ');
        console.log(result);
      });
  }
}
