import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';

@Component({
  selector: 'app-gallery',
  imports: [
    SwiperComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {

}
