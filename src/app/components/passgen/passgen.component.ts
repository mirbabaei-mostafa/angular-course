import { Component } from '@angular/core';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.css',
})
export class PassgenComponent {
  onGenerateClick() {
    console.log('Generate');
  }
}
