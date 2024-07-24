import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const ChildrenRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./search-bar/search-bar.component').then(
        (c) => c.SearchBarComponent
      ),
  },
  {
    path: 'add-book',
    loadComponent: () =>
      import('./add-book/add-book.component').then((c) => c.AddBookComponent),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./category-list/category-list.component').then(
        (c) => c.CategoryListComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(ChildrenRoutes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
