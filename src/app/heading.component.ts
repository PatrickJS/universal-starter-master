import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'icici-heading',
    template: '<div>Heading</div>'
})

export class headingComponent implements OnInit {
    public record;
    constructor() { }
    ngOnInit() {
        this.record = [{
            "styling": {
                "overall": {}
            },
            "data": {
                "src1": "http://localhost:3202/uploads/p1.png",
                "src2": "http://localhost:3202/uploads/p2.png",
                "src3": "http://localhost:3202/uploads/p3.png",
                "customerName": "Customer Name",
                "cardAccNo": "Card Account No"
            },
            "mappings": [
                {
                    "mapAttr": "src1"
                },
                {
                    "mapAttr": "src2"
                },
                {
                    "mapAttr": "src3"
                },
                {
                    "mapAttr": "customerName"
                },
                {
                    "mapAttr": "cardAccNo"
                }
            ]
        }];
    }
}