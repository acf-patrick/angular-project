import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Link from 'src/app/@shared/models/link';
import { BreadcrumbService } from 'src/app/@shared/services/breadcrumb.service';

const links: Link[] = [
  { path: '/loan', content: 'Dashboard' },
  { path: '/loan/list', content: 'Liste des prêts' },
  { path: '/loan/create', content: 'Enregistrer un nouveau prêt' },
  /*   { path: '', content: 'Calendrier de remboursement' }, // fix this
  { path: '', content: 'Actionnaires' },
  { path: '', content: 'Clients' },
  { path: '', content: 'Annuaire' },
  { path: '', content: 'Flow chart' }, */
];

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  links = links;
  currentHighlight!: any;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    window.addEventListener('resize', (event) => {
      console.log(event);
    });
  }

  onClick(event: any, index: number): void {
    let obj = links[index];
    this.breadcrumbService.replace(obj.path, obj.content);
    this.router.navigate([obj.path]);

    if (this.currentHighlight)
      this.currentHighlight.style.background = 'transparent';
    const link = event.currentTarget;
    link.style.background = '#864879';
    this.currentHighlight = link;
  }

  togglerOnClick(): void {
    let div: any = document.querySelector('.sidemenu');
    div.style.width = '280px';
  }

  closeOnClick(): void {
    let div: any = document.querySelector('.sidemenu');
    div.style.width = '0';
  }
}
