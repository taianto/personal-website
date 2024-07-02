import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { LinkButtonComponent } from '../../components/link-button/link-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, CommonModule, LinkButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  socialButtons = [
    { label: 'LinkedIn', path: 'https://www.linkedin.com/in/anton-tairov/', icon: '../../../assets/images/logo-linkedin.svg'},
    { label: 'GitHub', path: 'https://github.com/taianto', icon: '../../../assets/images/logo-github.svg' }
  ];
}
