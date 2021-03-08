import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WizardLayoutComponent } from './layouts/wizard-layout/wizard-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WizardModule } from './layouts/wizard-layout/wizard/wizard.module';
import { SharedModule } from './sharedmodule/shared.module';
import { GraphQLModule } from './graphql.module';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const k = 5;

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    WizardModule,
    SharedModule.forRoot(),
    GraphQLModule,
  ],
  declarations: [AppComponent, WizardLayoutComponent, LoginLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//sup hommie
