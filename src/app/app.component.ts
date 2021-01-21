import { Component } from '@angular/core';
import { WeatherbitService } from './weatherbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercizio Angular';
  cities = [
    {
      nome: 'Torino',
      temperatura: '14'
    }, {
      nome: 'Milano',
      temperatura: '15'
    }, {
      nome: 'Genova',
      temperatura: '18'
    }
  ];
  selezionata: any;
  constructor(private wbs: WeatherbitService) { }
  clean() {
    this.selezionata=undefined;
  }
  refreshTemperature(itemName: string) {
    var trovato = this.cities.filter(
      el => ( el.nome === itemName )
    );
    this.selezionata = trovato[0];
    this.wbs.getData(this.selezionata.nome).subscribe(
      x => this.selezionata.temperatura = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }
}
