import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputAreaComponent } from './inputarea.component';

const routes: Routes = [
    { path: 'home', component: InputAreaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputAreaComponentRoutingModule {

}
