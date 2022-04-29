import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Link from 'src/app/@shared/models/link';
import { BreadcrumbService } from 'src/app/@shared/services/breadcrumb.service';

const LINKS: Link[] = [
  { path: '/loan', content: 'Dashboard' },
  { path: '/loan/list', content: 'Liste des prêts' },
  { path: '/loan/create', content: 'Enregistrer un nouveau prêt' },
  { path: '/loan/reimbursment', content: 'Calendrier de remboursement' },
];

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  links = LINKS;
  currentHighlight!: any;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        if (event.urlAfterRedirects === '/loan') {
          this.setHighlight(
            document.querySelector('.sidemenu-container a:first-child')
          );
        }
    });
  }

  onClick(event: any, index: number): void {
    let obj = LINKS[index];
    this.breadcrumbService.replace(obj.path, obj.content);
    if (obj.content === 'Dashboard') this.breadcrumbService.remove();
    this.router.navigate([obj.path]);
    this.setHighlight(event.currentTarget);
  }

  setHighlight(link: any) {
    if (this.currentHighlight)
      this.currentHighlight.style.background = 'transparent';
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
