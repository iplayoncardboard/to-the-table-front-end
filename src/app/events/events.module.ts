import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events.component';

import { EventsRoutingModule } from './events-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule {}
