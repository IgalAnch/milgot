import { Component } from '@angular/core';
import { Apollo, gql, APOLLO_OPTIONS } from 'apollo-angular';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginLayoutService } from '../../login-layout.service';

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

  //mf,3rr,1dr,3ww,3wb,1sr,2kc,1sw,fg,md,cr,kt,sf;brd,rda,rrd,msd,scw,cd,bri
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
