import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inputarea',
    templateUrl: './inputarea.component.html',
    styleUrls: ['./inputarea.component.css']

})
export class InputAreaComponent implements OnInit {
    int: number;
    result: number;
    rendered: number;

    inc() {
        if (!this.int) {
            return this.int = 1;
        }
        this.int += 1;
    }

    dec() {
        if (!this.int) {
            return this.int = -1;
        }
        this.int -= 1;
    }

    reset() {
        this.int = 0;
    }

    render() {
        this.result = this.rendered = this.int;
        if (!(this.int || this.int === 0)) {
            this.rendered = 0;
        }

        console.log('this.int ' + this.int);
        console.log('this.result ' + this.result);
        console.log('this.rendered ' + this.rendered);
    }

    constructor() {
        if (!(this.int || this.int === 0)) {
            this.rendered = 0;
        }
    }

    ngOnInit() {

    }
}
