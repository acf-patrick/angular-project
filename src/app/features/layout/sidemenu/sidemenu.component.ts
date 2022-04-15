import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Link from 'src/app/@shared/models/link';
import { BreadcrumbService } from 'src/app/@shared/services/breadcrumb.service';

const links: Link[] = [
  { path: '/loan/list', content: 'Liste des prêts' },
  { path: '/loan/create', content: 'Enregistrer un nouveau prêt' },
  { path: '', content: 'Calendrier de remboursement' }, // fix this
  { path: '', content: 'Actionnaires' },
  { path: '', content: 'Clients' },
  { path: '', content: 'Annuaire' },
  { path: '', content: 'Flow chart' }
];

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  links = links;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {}

  onClick(index: number): void {
    let obj = links[index];
    this.breadcrumbService.replace(obj.path, obj.content);
    this.router.navigate([obj.path]);
  }
}
