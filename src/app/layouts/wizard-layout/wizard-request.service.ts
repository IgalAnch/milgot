import { Injectable } from '@angular/core';

//Apollo gql
import { Apollo, gql } from 'apollo-angular';

import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class WizardRequestService {
  constructor(private apollo: Apollo) {}
  //documents = ['', '', ''];
  //

  query_getTypes = gql`
    query OK(){
        
    }
  `;
}
