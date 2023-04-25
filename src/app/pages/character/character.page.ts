import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

import { CharacterService } from 'src/app/services/Character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class CharacterPage implements OnInit {

  character: any
  trailer: any
  tiendas: any
  plataformas: any
  imagenes: any
  dlcs: any

  isModalOpen = false

  idJuego = this.route.snapshot.paramMap.get('id')

  public image = ""

  constructor(
    public characterService: CharacterService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertCntrl: AlertController,
    public LoadingController: LoadingController
  ) { }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture'
  }

  async showLoading() {
    const loading = await this.LoadingController.create({
      message: 'Cargando datos...',
    })

    loading.present()
  }

  ngOnInit() {

    this.showLoading()

    this.cargaDatos(this.idJuego)

  }

  cargaDatos(id: any) {

    this.characterService.getCharacter(id).subscribe(data => {

      this.character = data
      this.plataformas = data.parent_platforms

    })

    this.characterService.getTrailer(id).subscribe(data => {
      this.trailer = data.results
    })

    this.characterService.getShop(id).subscribe(data => {
      this.tiendas = data.results
    })

    this.characterService.getImagenes(id).subscribe(data => {
      this.imagenes = data.results

    })

    this.characterService.getDLC(id).subscribe(data => {
      this.dlcs = data.results
      this.LoadingController.dismiss()
    })

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.cargaDatos(this.idJuego)
      event.target.complete()
    }, 2000)
  }

  abrir(id: any) {

    for (let x = 0; x < this.tiendas.length; x++) {

      if (this.tiendas[x].id == id) {
        window.location.href = this.tiendas[x].url
      }

    }

  }

  verMas(id: any) {

    this.navCtrl.navigateForward("/character/" + id);

  }

  verImage(isOpen: boolean, img: any) {

    this.isModalOpen = isOpen
    this.image = img

  }


  atras() {
    this.navCtrl.back()
  }

}
