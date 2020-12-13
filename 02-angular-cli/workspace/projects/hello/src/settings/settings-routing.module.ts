import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  {
    component: DialogComponent,
    outlet: 'dialogs',
    path: 'dialog-stam'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
