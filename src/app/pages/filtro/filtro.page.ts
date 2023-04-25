import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { GenresService } from 'src/app/services/genres/genres.service';
import { PlatformsService } from 'src/app/services/platforms/platforms.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { FiltradoService } from 'src/app/services/filtrado/filtrado.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, MenuComponent]
})

export class FiltroPage implements OnInit {

  generos: any
  plataformas: any
  tiendas: any
  tienda: Array<String> = []
  resultado: any

  private tiendasFormateadas = ''

  filtrado = new FormGroup({
    genero: new FormControl(''),
    plataforma: new FormControl(''),
    valoracion: new FormControl(''),
  })

  constructor(
    public genres: GenresService,
    public platforms: PlatformsService,
    public stores: StoresService,
    public filter: FiltradoService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cargaDatos()
  }

  cargaDatos() {

    this.genres.getGenres().subscribe(data => {

      this.generos = data.results

    })

    this.platforms.getPlatforms().subscribe(data => {
      this.plataformas = data.results
    })

    this.stores.getStores().subscribe(data => {
      this.tiendas = data.results
    })

  }

  pinFormatter(value: any) {
    return value
  }

  agrega($event: any) {
    if ($event.detail.checked == true) {

      this.tienda.push($event.detail.value)

    } else {

      this.tienda = this.tienda.filter(t => t != $event.detail.value)

    }
  }

  lanzarBusqueda() {

    for (let x = 0; x < this.tienda.length; x++) {
      this.tiendasFormateadas = this.tiendasFormateadas + this.tienda[x] + ','
    }

    let filtro = this.filtrado.get('genero')?.value
    let plataforma = this.filtrado.get('plataforma')?.value
    let valoracion = this.filtrado.get('valoracion')?.value

    this.filter.getFiltrado(filtro, plataforma, valoracion, this.tiendasFormateadas).subscribe(data => {
      
      this.resultado = data.results

    })

  }

}
