import { Injectable } from '@angular/core';
import Link from '../models/link';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private links: Link[] = [{ path: '', content: 'Acceuil' }];

  constructor() {}

  getLinks(): Link[] {
    return this.links;
  }

  remove(index: number = 1): void {
    this.links.splice(index);
  }

  replace(path: string, content: string): void {
    this.remove();
    this.push(path, content);
  }

  push(path: string, content: string): void {
    this.links.push({ path: path, content: content });
  }
}
