import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']

})
export class ResultComponent implements OnInit {
    @Input() rendered: number;

    constructor(private route: ActivatedRoute) {
        console.log('this.route.snapshot.paramMap.get("rendered") ' + this.route.snapshot.paramMap.get('rendered'));
        let rendered = +this.route.snapshot.paramMap.get('rendered');
        this.rendered = rendered;

    }

    ngOnInit() {

    }
}
