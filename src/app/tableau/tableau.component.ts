import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

interface TableauContent {

  header: string[],
  rows: any[]

}

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  numberOfItems:number = 10

  data: any[] = [
    {
      'Id': 1,
      'status': 'parent',
      'Name': 'Hayot',
      'FirstName': 'Olivier',
      'isOk': 'yes'
    },
    {
      'Id': 2,
      'status': 'child',
      'Name': 'Hayot',
      'FirstName': 'Laurent',
      'isOk': 'no'
    },
    {
      'Id': 3,
      'status': 'parent',
      'Name': 'Hayot',
      'FirstName': 'Olivier',
      'isOk': 'yes'
    },
    {
      'Id': 4,
      'status': 'child',
      'Name': 'Hayot',
      'FirstName': 'Laurent',
      'isOk': 'no'
    },
    {
      'Id': 5,
      'status': 'parent',
      'Name': 'Hayot',
      'FirstName': 'Olivier',
      'isOk': 'yes'
    },
    {
      'Id': 6,
      'status': 'child',
      'Name': 'Hayot',
      'FirstName': 'Laurent',
      'isOk': 'no'
    },
    {
      'Id': 7,
      'status': 'parent',
      'Name': 'Hayot',
      'FirstName': 'Olivier',
      'isOk': 'yes'
    },
    {
      'Id': 8,
      'status': 'child',
      'Name': 'Hayot',
      'FirstName': 'Laurent',
      'isOk': 'no'
    },
    {
      'Id': 9,
      'status': 'parent',
      'Name': 'Hayot',
      'FirstName': 'Olivier',
      'isOk': 'yes'
    },
    {
      'Id': 10,
      'status': 'child',
      'Name': 'Hayot',
      'FirstName': 'Laurent',
      'isOk': 'no'
    },
    {
      'Id': 11,
      'status': 'parent',
      'Name': 'Hayot',
      'FirstName': 'Olivier',
      'isOk': 'yes'
    },
    {
      'Id': 12,
      'status': 'child',
      'Name': 'Hayot',
      'FirstName': 'Laurent',
      'isOk': 'no'
    }
  ]

}
