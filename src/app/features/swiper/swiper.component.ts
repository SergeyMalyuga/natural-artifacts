import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  templateUrl: 'swiper.component.html',
  styleUrl: 'swiper.component.scss',
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  @Output() slideChanged = new EventEmitter<number>();

  private swiper!: Swiper;
  private visiblyAmountSlides = 0;

  constructor(private el: ElementRef) {}

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  ngAfterViewInit() {
    const swiperElement = this.el.nativeElement.querySelector('.swiper');

    this.swiper = new Swiper(swiperElement, {
      modules: [Autoplay, Pagination, Navigation, EffectFlip],
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      navigation: {
        addIcons: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1023: { slidesPerView: 4 },
      },
      on: {
        slideChange: (swiper) => { //TODO доработать отображение количества общих слайдов
          this.slideChanged.emit(swiper.activeIndex + 1);
          if(this.visiblyAmountSlides !== Number(swiper.params.slidesPerGroup)) {
            console.log(this.visiblyAmountSlides);
            console.log(swiper.params.slidesPerView);
            this.visiblyAmountSlides = Number(swiper.params.slidesPerGroup);
          }
        },
      },
    });
  }
}
