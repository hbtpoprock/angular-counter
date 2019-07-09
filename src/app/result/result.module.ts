import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';


@NgModule({
    imports: [CommonModule, FormsModule, ResultRoutingModule, RouterModule],
    declarations: [ResultComponent]
})

export class ResultModule { }

