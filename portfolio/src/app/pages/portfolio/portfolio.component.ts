import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [

    {
      title: 'Lorum Ipsum',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque volutpat ac tincidunt vitae semper quis. Massa sed elementum tempus egestas sed. Eget lorem dolor sed viverra ipsum nunc. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Ac felis donec et odio pellentesque diam volutpat commodo sed. Id faucibus nisl tincidunt eget nullam. Sed id semper risus in hendrerit gravida. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Massa enim nec dui nunc mattis enim ut. Egestas integer eget aliquet nibh praesent tristique. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Id interdum velit laoreet id. Aliquet eget sit amet tellus cras adipiscing. Placerat orci nulla pellentesque dignissim. Lacus vel facilisis volutpat est velit egestas. Tortor dignissim convallis aenean et tortor at risus viverra.
      `,
      features: `
      Hello 
      \nWorld
      `,
      image: 'https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      links: [
        { label: 'Test', path: 'https://www.linkedin.com/in/anton-tairov/', icon: '../../../assets/images/logo-linkedin.svg' },
      ]
    }

  ];
}
