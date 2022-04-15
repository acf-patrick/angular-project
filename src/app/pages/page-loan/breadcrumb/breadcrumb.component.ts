import { Component, OnInit } from '@angular/core';

const links = [
  { path: '', content: 'Liste des prêts' },
  { path: '', content: 'Enregistrement des prêts' },
  { path: '', content: 'Calendrier de remboursement' },
  { path: '', content: 'Dashboard' },
];

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  links: any[] = links;
  constructor() {}

  ngOnInit(): void {}
  linkOnClick(index: number, event: any): void {
    event.preventDefault();
    if (index !== this.links.length) this.links.splice(index + 1);
  }
}
