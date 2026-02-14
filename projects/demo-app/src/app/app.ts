import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { QTable } from '../../../q-table/src/lib/q-table';


@Component({
  selector: 'app-root',
  imports: [QTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');

  data: any[] = [
    { id: 8945, name: 'Praful Pathare', price: 38458},
    { id: 4956, name: 'Elon Musk', price: 838456},
    { id: 2347, name: 'Phillip Purcell', price: 983459, company: 'Morgan Stanley'},
    { id: 2347, name: 'Stanley Druckenmiller', company: 'Quantum Fund'},
    { id: 4896, name: 'Mark Zuckerberg', price: 83456},
    { id: 7249, name: 'Lewis Hamilton', price: 8569656},
  ]


}
