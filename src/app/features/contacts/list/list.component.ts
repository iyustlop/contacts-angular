import { Component, inject, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contacts.interface';
import { ContactService } from '../contacts.services';
import { tap } from 'rxjs';

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
export class ListComponent implements OnInit{
  
  data!: Contact[];
  displayedColumns:ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action'];
  sortables:ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];
  
  ngOnInit(): void {
    this.getAllContacts()
  }

  private readonly _contactSvc = inject(ContactService);
  
  getAllContacts(){
    this._contactSvc.getAllContacts()
    .pipe(
      tap((contacts:Contact[]) => this.data = [...contacts])
    )
    .subscribe()
  }

}
