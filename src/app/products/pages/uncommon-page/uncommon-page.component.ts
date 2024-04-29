import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name:string = 'Efrain';
  public gender:'male'|'female' = 'male';
  public invitationMap = {
     'male': 'invitarlo',
     'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18mPural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo' ];

  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Efrain Dominguez ',
    age: 39,
    address: 'Hermosillo Sonora'

  }

  //Async Pipe
  // public myObservableTimer: Observable<number> = interval(2000).pipe(
  //   tap(value => console.log('tap:', value ))
  // )

  // public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Tenemos datos en la promesa');
  //     console.log('Tenemos datos en la promesa');
  //   }, 3500)
  // })


}
