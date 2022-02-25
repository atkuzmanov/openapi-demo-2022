import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
// import {PetstoreComponent} from "../app/petstore/petstore.component";
// import {PetService} from 'src/app/api/services';
import {PetstoreComponent} from "../app/petstore/petstore.component";
import {PetService} from 'src/app/api/services';

const routes: Routes = [
  // { path: 'pet', component: PetstoreComponent }
  // { path: 'pet', component: PetService }
  // { path: 'pet', component: PetService }
  // { path: '', redirectTo: 'pet', pathMatch: 'full' },
  { path: 'pet', component: PetstoreComponent, canActivate: [PetService] },
  // { path: 'pet/findByTags', component: PetstoreComponent, canActivate: [PetService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    console.log('>>> Configured routes: ', this.router.config);
  }

  ngOnInit() {
    // console.log('>>> Configured routes: ', this.router.config);
  }
}
