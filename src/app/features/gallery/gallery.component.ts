import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';

@Component({
  selector: 'app-gallery',
  imports: [SwiperComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  public currentSlide: WritableSignal<number> = signal<number>(1);
  public totalAmountSlide: WritableSignal<number> = signal<number>(1);

  onSlideChanged(amount: number) {
    this.currentSlide.set(amount);
  }

  onTotalAmountSlideChanged(amount: number) {
    this.totalAmountSlide.set(amount);
  }
}
