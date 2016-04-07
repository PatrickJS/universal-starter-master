import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'icici-body',
    templateUrl: 'http://localhost:3000/src/app/app.component.html'
    })

export class bodyComponent implements OnInit {
    public record;
    constructor() { }

    ngOnInit() {
        this.record = [{
            "styling": {
                "overall": {}
            },
            "data": {
                "statementDate": "Statement Date",
                "minAmtDue": "Minimum Amount Due",
                "totalAmtDue": "Your Total Amount Due",
                "stmtSummary": "Statement Summary",
                "creditSummary": "Credit Summary",
                "rewards": "REWARDS",
                "bottomPara": "Convert your Big shopping bills into small, manageable EMI's! If any of the below transaction is highlighted,you may login to ICICI Bank Internet Banking and convert into EMI now ! TnC apply, visit www.icicibank.com/emioncall for details.",
                "prevBalance": "Previous Balance",
                "purchases": "Purchases/ Charges",
                "cashAdv": "Cash Advances",
                "payments": "Payments/ Credits",
                "creditLimit": "Credit Limit",
                "creditAvail": "Available Credit",
                "pointsEarned": "Points Earned",
                "payback": "Points Transferred to PAYBACK(Acc:",
                "dueDate": "Due Date:",
                "Amt": "Rs.",
                "interest": "Interest will be levied if Total Amount Due is not paid"
            },
            "mappings": [
                {
                    "mapAttr": "statementDate"
                },
                {
                    "mapAttr": "minAmtDue"
                },
                {
                    "mapAttr": "totalAmtDue"
                },
                {
                    "mapAttr": "stmtSummary"
                },
                {
                    "mapAttr": "creditSummary"
                },
                {
                    "mapAttr": "rewards"
                },
                {
                    "mapAttr": "bottomPara"
                },
                {
                    "mapAttr": "prevBalance"
                },
                {
                    "mapAttr": "purchases"
                },
                {
                    "mapAttr": "cashAdv"
                },
                {
                    "mapAttr": "payments"
                },
                {
                    "mapAttr": "creditLimit"
                },
                {
                    "mapAttr": "creditAvail"
                },
                {
                    "mapAttr": "pointsEarned"
                },
                {
                    "mapAttr": "payback"
                },
                {
                    "mapAttr": "dueDate"
                },
                {
                    "mapAttr": "Amt"
                },
                {
                    "mapAttr": "interest"
                }
            ]
        }
        ];
    }
}