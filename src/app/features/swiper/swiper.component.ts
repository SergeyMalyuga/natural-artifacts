import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output, signal, WritableSignal,
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
  @Output() totalSlideChanged = new EventEmitter<number>();

  private swiper!: Swiper;
  private totalAmountSlides: WritableSignal<number> = signal<number>(0);
  private visiblySlides: WritableSignal<number> = signal<number>(0);

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
        init: (swiper) => {
          this.totalAmountSlides.set(Number(swiper.slides.length) - Number(swiper.params.slidesPerView) + 1)
          this.visiblySlides.set(Number(swiper.params.slidesPerView));
          this.totalSlideChanged.emit(this.totalAmountSlides())},
        slideChange: (swiper) => {
          this.slideChanged.emit(swiper.activeIndex + 1);
        },
        resize: (swiper) => {
          this.visiblySlides.set(Number(swiper.params.slidesPerView))
          this.totalAmountSlides.set(Number(swiper.slides.length) - Number(swiper.params.slidesPerView) + 1);
          this.totalSlideChanged.emit(Number(this.totalAmountSlides()));
        }
      },
    });
  }
}
