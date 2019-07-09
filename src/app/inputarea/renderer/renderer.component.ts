import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.css']

})
export class RendererComponent implements OnInit {
    @Input() result: number;
    @Input() rendered: number;

    constructor() {

    }

    ngOnInit() {

    }
}
