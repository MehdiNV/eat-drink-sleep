import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { SelectLocationModalPage } from './select-location-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SelectLocationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule],
})
export class SelectLocationModalPageRoutingModule {}
