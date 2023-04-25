import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, NavController } from '@ionic/angular';

import { AllPersonajesService } from 'src/app/services/allPresonajes/all-personajes.service';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class HomePage implements OnInit {

  characters: any
  results: any
  pagina: number = 1
  nombre: string = ''

  constructor(
    public allPersonajesService: AllPersonajesService,
    public navCtrl: NavController,
    public LoadingController: LoadingController) { }

  async showLoading() {
    const loading = await this.LoadingController.create({
      message: 'Cargando datos...',
    })

    loading.present()
  }

  ngOnInit() {

    this.showLoading()
    this.cargaDatos(this.pagina, this.nombre)

  }

  cargaDatos(page: any, titulo: any) {
    this.allPersonajesService.getCharacters(page, titulo).subscribe(data => {
      this.characters = data.results
      this.LoadingController.dismiss()
    })
  }

  buscar($event: any) {
    this.nombre = $event
    this.cargaDatos(this.pagina, this.nombre)
  }

  pagSiguiente(pag: any) {

    if (this.pagina < 44934) {

      this.showLoading()
      this.pagina = pag
      this.cargaDatos(this.pagina, this.nombre)

    }

  }

  pagAnterior(pag: any) {

    if (this.pagina > 1) {

      this.showLoading()
      this.pagina = pag
      this.cargaDatos(this.pagina, this.nombre)

    }

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.cargaDatos(1, this.nombre)
      event.target.complete()
    }, 2000)
  }

  verMas(id: any) {

    this.navCtrl.navigateForward("/character/" + id);

  }

}
