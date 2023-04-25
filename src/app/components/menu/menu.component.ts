import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuComponent implements OnInit {

  @Input() pantalla: any

  @Output() tituloEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() { }

  escribeTitulo(event: any) {
    this.tituloEvent.emit(event.detail.value)
  }

}
