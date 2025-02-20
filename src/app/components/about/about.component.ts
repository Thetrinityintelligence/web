import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    navText: [
      '<i class="fa fa-angle-left fa-2x"></i>',
      '<i class="fa fa-angle-right fa-2x"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  ratings: any[] = [];
  slidesStore = [
    {
      description: 'Lady with a Teddy',
      src: 'https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg',
    },
    {
      description: 'Girl with camera',
      src: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg',
    },
    {
      description: 'Beautiful Girl with Glasses',
      src: 'https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg',
    },
    {
      description: 'Redhead with frackles',
      src: 'https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg',
    },
    {
      description: 'Girl in black dress',
      src: 'https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg',
    },
    {
      description: 'Girl Sitting on Chair',
      src: 'https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg',
    },
  ];
  clients:any[]=[
    {
      id:1,
      img:'assets/img/clients/client-1.png'
    },
    {
      id:2,
      img:'assets/img/clients/client-2.png'
    },
    {
      id:3,
      img:'assets/img/clients/client-3.png'
    },
    {
      id:4,
      img:'assets/img/clients/client-4.png'
    },
    {
      id:5,
      img:'assets/img/clients/client-5.png'
    },
    {
      id:6,
      img:'assets/img/clients/client-6.png'
    },
    {
      id:7,
      img:'assets/img/clients/client-7.png'
    },
  ]
  constructor(private httpService: HttpService) {
    window.scrollTo(0, 0);
    this.getRatings();
  }
  getRatings() {
    this.httpService.getRating().subscribe((res: any) => {
      if (res.data && res.data.status == 'OK') {
        this.ratings = res.data.result.reviews;
        console.log('Array(5).fill(4);::', Array(5).fill(4));

        this.ratings.map((rating) => {
          rating.ratingArray = [];
          rating.ratingArray = Array(rating.rating);
        });
      }
    });
  }

}
