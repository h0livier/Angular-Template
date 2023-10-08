import { Component } from '@angular/core';

interface Link{
  label: string,
  destination: string,
  sublinks?: Link[]
}

@Component({
  selector: 'horizontal-nav-bar',
  templateUrl: './horizontal-nav-bar.component.html',
  styleUrls: ['./horizontal-nav-bar.component.scss']
})
export class HorizontalNavBarComponent {

  links: Link[] = [
    {
      label: 'Oui',
      destination: 'www.google.com'
    },
    {
      label: 'Non',
      destination: 'www.easi.net',
      sublinks: 
      [
        {
          label: "Test",
          destination: "ok"
        }
      ]
    }
  ]

}
