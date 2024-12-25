import { Component, Input } from '@angular/core';
import { driver } from '../../driver';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';
@Component({
  selector: 'app-comp',
  imports:[CommonModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input()
  vozac:driver| undefined;
  @Input()
  indeks:number| undefined;

  onDrvView(){
    //console.log("Klikna me!")
    let link: string |undefined; //ova e TS
    //var link=''; ako sakame JS
    if(this.vozac?.iconUrl)
    {link=this.vozac?.iconUrl}
    else{
      link="https://www.google.com/"
    };
    window.open(link,"_blank")
  }
  klasi()//ova e isto so klasi2 samo sto e vo jquery
  //tuka e postrogo i ako ne odgovara so izrazot ne nasleduva klasa na pr lunatic kje postane neizboeno
  {
    return {'begin':this.vozac?.category=='ASD',
      'adv':this.vozac?.category=='EXPERT',
      'undr':true}
    }

  klasi2(){ //ova e bukv istoto samo vo java sccript 
    //ovde sekako se nasleduva nekoja klasa
    if(this.vozac?.category=='ASD'){return 'begin'}
    else{return 'adv'}
  }
  //ANGULAR ZNAE DA GI RAZVIVA I DVETE 
  stilovi(){
    if(this.vozac?.category=='EXPERT'){return 'underline'}
    else{return 'none'}
  }
}

