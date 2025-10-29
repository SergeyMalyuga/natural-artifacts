import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation, EffectFlip } from 'swiper/modules';

Swiper.use([Autoplay, Pagination, Navigation, EffectFlip]);
@Component({
  selector: 'app-swiper',
  templateUrl: 'swiper.component.html',
  styleUrl: 'swiper.component.scss'
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  private swiper!: Swiper;

  constructor(private el: ElementRef) {}

  ngOnDestroy(): void {
        if(this.swiper) {
          this.swiper.destroy();
        }
    }

  ngAfterViewInit() {

    const swiperElement = this.el.nativeElement.querySelector('.swiper');

    this.swiper = new Swiper( swiperElement, {
      modules: [Autoplay, Pagination, Navigation, EffectFlip],
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        addIcons: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1023: { slidesPerView: 3 },
        1920: { slidesPerView: 4 }
      },
    });
  }
}

