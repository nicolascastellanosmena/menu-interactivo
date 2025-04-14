import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  mostrarMenu: boolean = false;

  abrirMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  constructor() { }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
  const menuElement = document.querySelector('.scroll-container');
  const buttonElement = document.querySelector('.btn');

  if (this.mostrarMenu && menuElement && !menuElement.contains(event.target as Node) && buttonElement && !buttonElement.contains(event.target as Node)) {
    this.mostrarMenu = false;
  }
}

}