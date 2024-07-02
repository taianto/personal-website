import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})


export class LinkButtonComponent {
  @Input() label: string;
  @Input() path: string;
  @Input() icon: string;

  constructor() { 
    this.label = '';
    this.path = '';
    this.icon = '';
  }
}


