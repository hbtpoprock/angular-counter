import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { InputAreaComponent } from './inputarea.component';
import { RendererComponent } from '../renderer/renderer.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [InputAreaComponent, RendererComponent],
    exports: [InputAreaComponent]
})

export class InputAreaModule { }

