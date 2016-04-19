import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'my-body',
  styles: [`
    .divDynamic td,
    .divDynamic th {
        border: solid #D8D8D8 1px;
        text-align: center;
    }

    .divDynamic table {
        border-collapse: separate;
        border: solid #D8D8D8 2px;
        border-radius: 5px;
    }

    .spec td,
    .spec th {
        border: solid #f5821f 1px;
        text-align: center;
    }

    .spec table {
        border-collapse: separate;
        border: solid #f5821f 2px;
        border-radius: 5px;
    }
  `],
  template: `
  <div *ngFor="#comp of record">
      <div class="col-sm-4 divDynamic">
          <table style="width:100%;">
              <tr style="background-color:#B8B8B8">
                  <th>{{comp.data[comp.mappings[0].mapAttr]}}</th>
              </tr>
              <tr>
                  <td>&nbsp;</td>
              </tr>
          </table>
          <br/>
      </div>
      <div class="col-sm-4 divDynamic">
          <table style="width:100%;">
              <tr style="background-color:#B8B8B8">
                  <th>{{comp.data[comp.mappings[1].mapAttr]}}</th>
              </tr>
              <tr>
                  <td>&nbsp;</td>
              </tr>
          </table>
          <br/>
      </div>
      <div class="col-sm-4 spec" style="float:right;">
          <table style="width:100%;">
              <tr style="background-color:#f5821f;color:white;">
                  <th>{{comp.data[comp.mappings[2].mapAttr]}}</th>
              </tr>
              <tr>
                  <td style="border:none;text-align:left;">{{comp.data[comp.mappings[16].mapAttr]}}</td>
              </tr>
              <tr>
                  <td style="border:none;text-align:left;">{{comp.data[comp.mappings[15].mapAttr]}}</td>
              </tr>
              <tr>
                  <td style="border:none;text-align:left;">{{comp.data[comp.mappings[17].mapAttr]}}</td>
              </tr>
          </table>
          <br/>
      </div>
      <div class="col-sm-8 spec">
          <table style="width:100%;">
              <tr>
                  <td rowspan="2" style="background-color:#f5821f;color:white;" class="col-xs-2 ">{{comp.data[comp.mappings[3].mapAttr]}}</td>
                  <th>{{comp.data[comp.mappings[7].mapAttr]}}</th>
                  <th>{{comp.data[comp.mappings[7].mapAttr]}}</th>
                  <th>{{comp.data[comp.mappings[7].mapAttr]}}</th>
                  <th>{{comp.data[comp.mappings[7].mapAttr]}}</th>
              </tr>
              <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
          </table>
          <br/>
      </div>
      <div class="col-sm-8 divDynamic">
          <table style="width:100%;">
              <tr>
                  <td rowspan="2" style="background-color:#B8B8B8;" class="col-xs-2 ">{{comp.data[comp.mappings[4].mapAttr]}}</td>
                  <th>{{comp.data[comp.mappings[11].mapAttr]}}</th>
                  <th>{{comp.data[comp.mappings[12].mapAttr]}}</th>
              </tr>
              <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
          </table>
          <br/>
      </div>
      <div class="col-sm-12 divDynamic">
          <table style="width:100%;">
              <tr>
                  <td rowspan="2" style="background-color:#B8B8B8;" class="col-xs-2 ">{{comp.data[comp.mappings[5].mapAttr]}}</td>
                  <th>{{comp.data[comp.mappings[13].mapAttr]}}</th>
                  <th>{{comp.data[comp.mappings[14].mapAttr]}}</th>
              </tr>
              <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
          </table>
          <br/>
      </div>
      <div class="col-sm-12" style="color:#a41c2b;border:solid #a41c2b 2px;">
          {{comp.data[comp.mappings[6].mapAttr]}}
      </div>
  </div>

  `
})
export class BodyComponent implements OnInit {
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
