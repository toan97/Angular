import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: "", redirectTo: "/client", pathMatch: "full" },
  { path: "client", loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: "**", redirectTo: "/client", pathMatch: "full" } /* luôn nằm cuối cùng */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
