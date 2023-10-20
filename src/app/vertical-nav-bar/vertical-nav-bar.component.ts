import { Component } from '@angular/core';

interface VerticalNavBarItem {
  value: string,
  destination: string,
  logo: string
}

@Component({
  selector: 'app-vertical-nav-bar',
  templateUrl: './vertical-nav-bar.component.html',
  styleUrls: ['./vertical-nav-bar.component.scss']
})
export class VerticalNavBarComponent {

  items: VerticalNavBarItem[] = [
    {
      value: "Home",
      destination: "/home",
      logo: "bi-house-door-fill"
    },
    {
      value: "Contacts",
      destination: "/contacts",
      logo: "bi-person-lines-fill"
    }
  ]

}
