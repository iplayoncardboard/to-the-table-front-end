import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AuthModule, AuthConfig } from '@auth0/auth0-angular';
import {domain, callbackUri, clientId} from './auth.config'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component'

const config: AuthConfig = {
  domain,
  clientId,
  redirectUri: callbackUri,
  /* Uncomment the following lines for better support  in browers like Safari where third-party cookies are blocked.
    See https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options for risks.
  */
  // cacheLocation: "localstorage",
  // useRefreshTokens: true
};
@NgModule({
  declarations: [
    AppComponent, 
    TabsComponent, 
    ProfileMenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot(config),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
