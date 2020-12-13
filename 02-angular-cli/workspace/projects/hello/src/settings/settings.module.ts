import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './profile/avatar/avatar.component';
import { DialogComponent } from './dialog/dialog.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [ ProfileComponent, AvatarComponent, DialogComponent ],
  imports: [ CommonModule, SettingsRoutingModule ],
  exports: [ProfileComponent, DialogComponent],
  providers: [],
})
export class SettingsModule {}
