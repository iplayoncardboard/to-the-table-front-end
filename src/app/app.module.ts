import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AuthModule } from '@auth0/auth0-angular';
import config from '../../capacitor.config';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component'

const redirectUri = `${config.appId}://dev-izuz7bak.auth0.com/capacitor/${config.appId}/callback`;
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
    AuthModule.forRoot({
      domain: "dev-izuz7bak.auth0.com",
      clientId: "Zx9HfttOU7Aaa5fMcZwl591SkMrh3uny",
      redirectUri
    }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
