import { Injectable } from '@angular/core';
import { WineCard } from '../interfaces/wine';
import { WineCardDTO } from '../interfaces/wine-dto';
import { WineCardError } from '../errors/wine-card-error';

@Injectable({
  providedIn: 'root'
})
export class SpecialOfferService {

  wineCards: WineCard[];

  constructor() { }

  private transformWineCardDTO(serverData: WineCardDTO): WineCard[] {
    if (!serverData.success) {
      throw new WineCardError(serverData['error-infos']);
    }
    return serverData.wineCards;
  }

  getWines(): Promise<WineCard[]> {   //for testing
    this.wineCards = [

      {
        id: 1,
        name: "Nagyon Finom",
        price: 15000,
        salePrice: 13000,
        rating: null, //null ha nincs
        numberOfRating: 0,
},
      {
        id: 2,
        name: "Koccintós",
        price: 500,
        salePrice: 400,
        rating: null, //null ha nincs
        numberOfRating: 0,
},
      {
        id: 3,
        name: "Teszt Bor",
        price: 20000,
        salePrice: 19000,
        rating: null, //null ha nincs
        numberOfRating: 0,
      },

    ];
    let p = new Promise<WineCard[]>((resolve) => {
      resolve(this.wineCards);
    });
    return p;

  }


}