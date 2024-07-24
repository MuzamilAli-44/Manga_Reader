import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageRoutingModule } from './homepage-routing-module';
import { ChildrenRoutes } from './homepage-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ChildrenRoutes),
    HomepageRoutingModule,
  ],
  exports: [RouterModule],
})
export class HomepageModule {}
