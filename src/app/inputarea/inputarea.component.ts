import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inputarea',
    templateUrl: './inputarea.component.html',
    styleUrls: ['./inputarea.component.css']

})
export class InputAreaComponent implements OnInit {
    int: number;
    result: number;

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
        this.result = this.int;
    }

    constructor() { }

    ngOnInit() {

    }
}
