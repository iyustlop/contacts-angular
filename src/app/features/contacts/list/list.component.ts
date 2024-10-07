import { Component } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contacts.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
      @if(data){
        <app-grid [displayedColumns]="displayedColumns" [data]="data" [sortableColumns]="sortables"/>
      }
    </section>
  `,
  styles: ``
})
export class ListComponent {
  data!: Contact[];
  displayedColumns:ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action'];
  sortables:ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];

}
