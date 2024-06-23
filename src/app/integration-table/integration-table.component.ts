import { Component } from '@angular/core';

interface RowData {
  projectName: string;
  sourceToDest: string;
  destToSource: string;
  editable: boolean;
}

@Component({
  selector: 'app-integration-table',
  templateUrl: './integration-table.component.html',
  styleUrls: ['./integration-table.component.css']
})
export class IntegrationTableComponent {
  rows: RowData[] = [];
  jsonOutput: string = '';

  constructor() {
    this.rows = [];
    this.jsonOutput = '';
  }

  addRow() {
    this.rows.push({ projectName: '', sourceToDest: '', destToSource: '', editable: true });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  modifyRow(index: number) {
    this.rows[index].editable = !this.rows[index].editable;
  }

  generateJSON() {
    const data: any = {};

    this.rows.forEach(row => {
      if (!data[row.projectName]) {
        data[row.projectName] = {
          projectName: row.projectName,
          sourceToDest: {},
          destToSource: {}
        };
      }

      const sourceToDestCount = Object.keys(data[row.projectName].sourceToDest).length + 1;
      const destToSourceCount = Object.keys(data[row.projectName].destToSource).length + 1;

      data[row.projectName].sourceToDest[`sourceToDest ${sourceToDestCount}`] = row.sourceToDest;
      data[row.projectName].destToSource[`destToSource ${destToSourceCount}`] = row.destToSource;
    });

    this.jsonOutput = JSON.stringify(data, null, 2);
  }
}

