import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {}

  firstOpen() {
    this.menuController.enable(true, 'profile');
    this.menuController.open('profile');
  }

  toggleMenu(){
    this.menuController.toggle('profile')
  }

}
