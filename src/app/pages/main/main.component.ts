import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { GalleryComponent } from '../../features/gallery/gallery.component';
import { AboutComponent } from '../../features/about/about.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { FooterComponent } from '../../features/footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
