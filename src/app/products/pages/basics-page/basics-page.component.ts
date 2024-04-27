import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'Efrain';
  public nameUpper: string = 'EFRAIN';
  public fullName: string = 'EfraiN DOMInGuez GoyCoCHEa';

  public customDate: Date = new Date();

}
