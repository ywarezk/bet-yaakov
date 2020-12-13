import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './profile/avatar/avatar.component';

@NgModule({
  declarations: [ ProfileComponent, AvatarComponent ],
  imports: [ CommonModule ],
  exports: [ProfileComponent],
  providers: [],
})
export class SettingsModule {}
