import { Component } from '@angular/core';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  inicial = 1;

  pontuacaoA = 0;
  pontuacaoB = 0;

  vitoriaA = 0;
  vitoriaB = 0;


  constructor(){}

  contarTento(valor: number) {
    this.inicial = valor;
  }

  subirTento(team: number){
    if(team === 1 ){
      this.pontuacaoA += this.inicial;
      this.checarVitoria()
      this.inicial = 1;
    }
    if(team === 2){
      this.pontuacaoB += this.inicial;
      this.checarVitoria()
      this.inicial = 1;
    }

  }

  tirarTento(team: number){
    if(team === 1 && this.pontuacaoA > 0){
      this.pontuacaoA -= this.inicial;
      if(this.pontuacaoA <= 0){
        this.pontuacaoA = 0
      }
      this.inicial = 1;
    }
    if(team === 2 && this.pontuacaoB > 0){
      this.pontuacaoB -= this.inicial;
      if(this.pontuacaoB <= 0){
        this.pontuacaoB = 0
      }
      this.inicial = 1;
    }
  }

  checarVitoria(){
    if(this.pontuacaoA >= 12){
      this.pontuacaoA = 0;
      this.pontuacaoB = 0;
      this.vitoriaA++;
    }
    else if(this.pontuacaoB >= 12){
      this.pontuacaoA = 0;
      this.pontuacaoB = 0;
      this.vitoriaB++;
    }
  }

  vitoria(team: number){
    if(team === 1){
      this.vitoriaA++
    }
    if(team === 2){
      this.vitoriaB++
    }
  }

  limpar(){
    this.inicial = 1;
    this.pontuacaoA = 0;
    this.pontuacaoB = 0;
    this.vitoriaA = 0;
    this.vitoriaB = 0;
  }


}
