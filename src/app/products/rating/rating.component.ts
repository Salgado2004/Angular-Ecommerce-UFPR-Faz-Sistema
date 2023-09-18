import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="99" height="19" viewBox="0 0 99 19" fill="none">
      <path class="{{ activestars[0] }}" d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"/>
      <path class="{{ activestars[2] }}" d="M49.5 0L51.6329 6.56434H58.535L52.9511 10.6213L55.084 17.1857L49.5 13.1287L43.916 17.1857L46.0489 10.6213L40.465 6.56434H47.3671L49.5 0Z"/>
      <path class="{{ activestars[1] }}" d="M29.5 0L31.6329 6.56434H38.535L32.9511 10.6213L35.084 17.1857L29.5 13.1287L23.916 17.1857L26.0489 10.6213L20.465 6.56434H27.3671L29.5 0Z"/>
      <path class="{{ activestars[3] }}" d="M69.5 0L71.6329 6.56434H78.535L72.9511 10.6213L75.084 17.1857L69.5 13.1287L63.916 17.1857L66.0489 10.6213L60.465 6.56434H67.3671L69.5 0Z"/>
      <path class="{{ activestars[4] }}" d="M89.5 0L91.6329 6.56434H98.535L92.9511 10.6213L95.084 17.1857L89.5 13.1287L83.916 17.1857L86.0489 10.6213L80.465 6.56434H87.3671L89.5 0Z"/>
    </svg>`,
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number;
  fullstars: number;
  activestars: string[] = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive'];

  ngOnInit() { 
    console.log(this.rating);
    this.fullstars = Math.floor(this.rating);
    for (let i = 0; i < this.fullstars; i++) {
      this.activestars[i] = 'active';
    }
  }

}
