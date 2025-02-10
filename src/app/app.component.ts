import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PassgenComponent } from './components/passgen/passgen.component';
import { CardsComponent } from './components/cards/cards.component';
import { TypingComponent } from './components/typing/typing.component';
import { Typing2Component } from './components/typing2/typing2.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PhotogalleryComponent } from './components/photogallery/photogallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PassgenComponent,
    CardsComponent,
    TypingComponent,
    Typing2Component,
    PaymentComponent,
    PhotogalleryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-cource';
}
