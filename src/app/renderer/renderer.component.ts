import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.css']

})
export class RendererComponent implements OnInit {
    // test: string;

    @Input() int: number;

    constructor() { }

    ngOnInit() {
        // We call a service that gets us the data
        // this.test = 'Hello World';
    }
}
