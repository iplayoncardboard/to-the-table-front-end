import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {}

  toggleMenu() {
    this.menuController.toggle('profile');
  }

}
