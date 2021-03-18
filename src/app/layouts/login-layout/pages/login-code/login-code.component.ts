import { Component } from '@angular/core';
import { Apollo, gql, APOLLO_OPTIONS } from 'apollo-angular';
import { map, filter } from 'rxjs/operators';
import { LoginLayoutService } from '../../login-layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-code.component.html',
  styleUrls: ['./login-code.component.scss'],
})
export class LoginCodeComponent {
  constructor(
    private apollo: Apollo,
    private loginLayoutService: LoginLayoutService,
    private router: Router
  ) {
    console.log('login_email= ');
    console.log(loginLayoutService.login_email);

    if (loginLayoutService.login_email == '') {
      router.navigate(['login']);
    }
  }

  error = 'none';
  success = 'none';

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

    let vars = c.form.value;

    let user_vars = {
      email: vars.email,
    };
    this.apollo
      .watchQuery({ query: this.input_user2, variables: user_vars })
      .valueChanges.subscribe(
        (result) => {
          console.log(result);
          this.error = 'none';
          this.success = 'block';
        },
        (error) => {
          console.log('ERROR');
          this.error = 'block';
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
    let newQuery: GQL.IUser;
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
