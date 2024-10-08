import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contacts.interface';
import { ContactService } from '../contacts.services';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

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
  
  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    this.getAllContacts()
  }

  getAllContacts(){
    this._contactSvc.getAllContacts()
    .pipe(
      takeUntilDestroyed(this._destroyRef),
      tap((contacts:Contact[]) => this.data = [...contacts])
    )
    .subscribe()
  }

}
