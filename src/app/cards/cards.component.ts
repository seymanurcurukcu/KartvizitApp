import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';
import { config } from 'rxjs';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

 constructor(
  public diolog:MatDialog,
  public cardServices:CardService
 ){}
 ngOnInit():void{
   this.cardServices.getCards();
 }
 OpenAddCardModal():void{
 this.diolog.open(CardModalComponent, {width:'400px'});

 }
}
