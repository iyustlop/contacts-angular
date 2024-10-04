import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule]

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink='/'>
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>
      <a mat-button routerLink='/contacts'>
        <mat-icon>list-alt</mat-icon>
        <span>Contacts</span>
      </a>
      <a mat-button>
        <mat-icon>add_box</mat-icon>
        <span>New</span>
      </a>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {

}