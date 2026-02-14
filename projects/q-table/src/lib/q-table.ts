import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'q-table',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: `./q-table.html`,
  styleUrl: `./q-table.css`
})
export class QTable implements OnChanges {

  @Input('data')
  data?: any[]

  q: string = '';
  searchResultCount: number = 0;

  headers: string[] = []
  rows: Row[] = []
  columnIndex: any = {};
  totalColumns: number = 0;


  ngOnChanges(changes: SimpleChanges): void {

    if (this.data === undefined) {
      return;
    }

    this.data.forEach(item => this.updateHeaders(Object.keys(item)))
    this.data.forEach(item => this.updateRows(item))
  }

  updateRows(item: any): void {
    
    let row: Row = new Row(this.totalColumns);

    Object.keys(item).forEach(key => {
      row.updateCell(this.columnIndex[key], item[key]);
    })

    this.rows.push(row);
  }

  updateHeaders(keys: string[]): void {

    if (this.headers === undefined || this.headers.length == 0) {
      this.headers = keys;
    }
    else {
      keys.forEach(key => {
        if (this.headers.indexOf(key) < 0) {
          this.headers.push(key)
        }
      })
    }

    this.headers.forEach((header, index) => {
      this.columnIndex[header] = index;
    })

    this.totalColumns = Object.keys(this.columnIndex).length;
  }

  search(): void {

    this.searchResultCount = 0;

    this.rows.forEach((row) => {

      row.visible = false;

      row.cells.forEach((cell) => {
        if((""+cell.value).toLowerCase().includes(this.q.toLowerCase())) {
          row.visible = true;
          this.searchResultCount++;
        }
      })

    })
  }


}

class Cell {
  value: any = undefined;
  hidden: boolean = false;

  constructor() {
  }
}

class Row {
  cells: Cell[] = []
  visible: boolean = true;

  constructor(totalCells: number) {
    for (let i = 0; i < totalCells; i++) {
      this.cells.push(new Cell());
    }

    this.visible = true;
  }

  updateCell(columnIndex: number, value: any): void {
    this.cells[columnIndex].value = value;
  }
}