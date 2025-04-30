import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showLoader = false;
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
  homePageCards: any[] = [
    {
      id: 1,
      icon: 'bi bi-activity',
      title: 'Quality',
      desc: `Quality is not just a buzzword at TSRG; it's the cornerstone of our operations. We embed quality into every facet of our service delivery, ensuring that each interaction, project, and solution meets the highest standards. Our commitment extends beyond mere compliance, driving us to consistently exceed industry benchmarks. From meticulous planning and execution to rigorous quality control measures, we strive for excellence in every detail. This dedication to quality translates into reliable, durable, and superior outcomes for our clients, fostering trust and long-term partnerships. We understand that quality is not just about meeting expectations, but about setting new standards of performance and innovation.`
    },
    {
      id: 2,
      icon: 'bi bi-broadcast',
      title: 'Passion',
      desc: `At TSRG; it's the driving force behind our commitment. It fuels our dedication to every project, every interaction, and every solution we deliver. This passion translates into a proactive approach, where we go beyond the expected to achieve exceptional results. It inspires us to continuously seek innovative solutions and to approach challenges with enthusiasm and determination. We believe that when passion is combined with expertise, it creates a powerful synergy that benefits our clients, leading to successful outcomes and lasting partnerships. At TSRG, our passion is the engine that propels us to exceed expectations and deliver services with genuine enthusiasm and dedication.`
    },
    {
      id: 3,
      icon: 'bi bi-easel',
      title: 'Respect',
      desc: `Respect is woven into the very fabric of TSRG's interactions, serving as a foundational value that guides every relationship, both internally and externally. We believe in fostering an environment of mutual understanding and appreciation, where every individual's perspective is valued and heard. This commitment to respect translates into transparent communication, collaborative partnerships, and a genuine consideration for the needs and opinions of our clients, partners, and employees. We recognize that respect is not just about politeness, but about building trust and creating a positive and inclusive environment where everyone feels valued. It's the cornerstone of our ethical conduct and the basis for building strong, lasting relationships that contribute to shared success.`
    },
    {
      id: 4,
      icon: 'bi bi-bounding-box-circles',
      title: 'Collaboration',
      desc: `Collaboration is at the heart of TSRG's approach, fostering a culture of teamwork and partnership that drives our success. We believe that by working together, sharing ideas, and leveraging diverse perspectives, we can achieve outcomes that surpass individual efforts. This collaborative spirit extends beyond our internal teams, encompassing our relationships with clients, partners, and stakeholders. We prioritize open communication, active listening, and a genuine willingness to work together towards shared goals. By fostering collaborative environments, we build strong relationships based on mutual trust and respect, leading to innovative solutions and long-term success. At TSRG, we recognize that collaboration is not just about teamwork; it's about creating a unified force that propels us towards collective achievement.`
    },
    {
      id: 5,
      icon: 'bi bi-easel',
      title: 'Faith',
      desc: `It's all about Faith, in the unwavering trust our customers place in us, is a cornerstone of TSRG's values. We recognize that this faith is not given lightly; it is earned through consistent dedication, transparency, and a proven track record of delivering on our promises. We deeply value the confidence our customers have in our ability to meet their needs and exceed their expectations. This faith translates into a commitment to upholding the highest standards of integrity, reliability, and service in all our interactions. We strive to nurture and strengthen this faith by continuously demonstrating our dedication to their success and well-being. At TSRG, we understand that faith is a precious commodity, and we are committed to honoring and reinforcing it through our unwavering commitment to excellence and customer satisfaction.`
    },
    {
      id: 6,
      icon: 'bi bi-easel',
      title: 'Customer Centricity',
      desc: `Customer centricity drives every aspect of TSRG's operations. We believe understanding and prioritizing client needs is paramount. This commitment results in proactive communication, personalized solutions, and a relentless pursuit of exceeding satisfaction. We build long-term relationships based on trust and respect, ensuring client goals are met. By placing customers at the center of our focus, we cultivate responsiveness and adaptability, delivering exceptional value and a seamless experience. We recognize our success is tied to our clients' success, and we foster partnerships that drive mutual growth.`
    },
    {
      id: 7,
      icon: 'bi bi-easel',
      title: 'Safety',
      desc: `Safety is not just a policy at TSRG; it's an ingrained value that permeates every aspect of our operations. We prioritize the well-being of our employees, clients, and partners above all else, embedding rigorous safety protocols into all our processes. This commitment translates into proactive risk assessments, comprehensive training programs, and a culture of vigilance that ensures a safe working environment. We understand that safety is not just about preventing accidents, but about fostering a mindset of responsibility and care. By consistently upholding the highest safety standards, we build trust and create an environment where everyone can operate with confidence. At TSRG, safety is non-negotiable, and we are dedicated to continuously improving our practices to ensure the well-being of all involved.`
    },
    {
      id: 8,
      icon: 'bi bi-bounding-box-circles',
      title: 'Integrity',
      desc: `Integrity forms the bedrock of TSRG's operations, serving as an unwavering principle that guides every decision and action. We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in all our dealings. This commitment to integrity translates into building trust with our clients, partners, and employees, fostering long-term relationships based on mutual respect and reliability. We believe that integrity is not just about adhering to legal requirements, but about conducting business with unwavering moral uprightness. It's about doing what is right, even when faced with challenges, and maintaining consistency in our values and actions. At TSRG, integrity is not negotiable; it is the cornerstone of our reputation and the foundation upon which we build lasting success.`
    }
  ]
  ratings: any[] = [];
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
 
  getClass(isEven: any, cardInfo: any) {
    let classes = 'service-item ';
    if (isEven) {
      classes += 'item-cyan ';
    } else {
      classes += 'item-orange ';
    }
    return classes;
  }
}
