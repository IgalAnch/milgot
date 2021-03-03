import { Component, OnInit } from '@angular/core';
import { Apollo, gql, APOLLO_OPTIONS } from 'apollo-angular';
import { map, filter } from 'rxjs/operators';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-pratim',
  templateUrl: './pratim2.component.html',
  styleUrls: ['./pratim.component.scss'],
})
export class PratimComponent implements OnInit {
  constructor(private apollo: Apollo) {}
  noticeText = 'block';

  ngOnInit(): void {}

  hidePopup() {
    this.noticeText = 'none';
  }

  input_user = gql`
    mutation OK(
      $gender: String!
      $previousLastName: String!
      $lastName: String!
      $firstName: String!
      $password: String!
      $username: String!
    ) {
      register(
        gender: $gender
        previousLastName: $previousLastName
        lastName: $lastName
        firstName: $firstName
        password: $password
        username: $username
      ) {
        id
        gender
        previousLastName
        lastName
        firstName
        password
        username
      }
    }
  `;

  onSubmit(c: any) {
    console.log(c.form.value);

    let vars = c.form.value;

    let user_vars = {
      //idNumber: vars.idNumber,
      gender: vars.gender,
      //birthYear: vars.birthYear,
      previousLastName: vars.previousLastName,
      lastName: vars.lastName,
      firstName: vars.firstName,
      password: '$1$2$3$', //...
      username: 'username', //...
    };
    this.apollo
      .mutate({ mutation: this.input_user, variables: user_vars })
      .subscribe((result) => {
        console.log(result);
      });
  }

  input_user2 = gql`
    mutation OKK(
      $idNumber: String!
      $gender: String!
      $birthYear: Float!
      $previousLastName: String!
      $lastName: String!
      $firstName: String!
      $password: String!
      $username: String!
    ) {
      register2(
        idNumber: $idNumber
        gender: $gender
        birthYear: $birthYear
        previousLastName: $previousLastName
        lastName: $lastName
        firstName: $firstName
        password: $password
        username: $username
      ) {
        id
        idNumber
        gender
        birthYear
        previousLastName
        lastName
        firstName
        password
        username
      }
    }
  `;

  onSubmit2(c: any) {
    console.log(c.form.value);

    let vars = c.form.value;

    let user_vars = {
      idNumber: vars.idNumber,
      gender: vars.gender,
      birthYear: parseFloat(vars.birthYear),
      previousLastName: vars.previousLastName,
      lastName: vars.lastName,
      firstName: vars.firstName,
      password: '$1$2$3$', //...
      username: 'username', //...
    };
    this.apollo
      .mutate({ mutation: this.input_user2, variables: user_vars })
      .subscribe((result) => {
        console.log(result);
      });
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
