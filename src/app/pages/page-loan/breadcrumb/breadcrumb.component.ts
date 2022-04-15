import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/@shared/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  constructor(public service: BreadcrumbService) {}

  ngOnInit(): void {}

  linkOnClick(index: number, event: any): void {
    event.preventDefault();
    event.currentTarget.classList.add('clicked');
    if (index !== this.service.getLinks().length)
      this.service.remove(index + 1);
  }
}
