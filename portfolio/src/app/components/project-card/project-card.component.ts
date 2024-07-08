import { Component, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LinkButtonComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() features: string;
  @Input() links: LinkButtonComponent[];

  constructor(private elementRef: ElementRef) {
    this.title = '';
    this.description = '';
    this.image = '';
    this.features = '';
    this.links = [];
  }

  get featuresLines() {
    return this.features.split('\n').filter(line => line.trim() !== '');
  }

  isExpanded = false;

  toggleExpanded() {
    const cardBorder = this.elementRef.nativeElement.querySelector('.card-border');
    const cardBody = this.elementRef.nativeElement.querySelector('.card-body');

    if (this.isExpanded) {
      cardBorder.style.height = '250px';
    } else {
      const scrollHeight = cardBody.scrollHeight;
      cardBorder.style.height = `${scrollHeight}px`;
    }

    this.isExpanded = !this.isExpanded;
  }
}
