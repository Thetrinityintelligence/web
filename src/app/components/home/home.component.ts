import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showLoader=false;
   customOptions: OwlOptions = {
      // loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      loop: false,
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
  homePageBanner:any[]=[
    {
      id:1,
      title:'Welcome to The Shree Ram Group',
      desc:'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.'
    },
    {
      id:2,
      title:'Lorem Ipsum Dolor',
      desc:'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.'
    },
    {
      id:3,
      title:'Sequi ea ut et est quaerat',
      desc:'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.'
    },
  ]
  ratings:any[]=[];
  constructor(private httpService: HttpService) {
    window.scrollTo(0, 0);
    this.getRatings();
  }
  getRatings() {
    this.httpService.getRating().subscribe((res: any) => {
      if (res.data && res.data.status == 'OK') {
        this.ratings = res.data.result.reviews;
        this.ratings.map((rating) => {
          rating.ratingArray = [];
          rating.ratingArray = Array(rating.rating);
        });
      }
    });
  }
}
