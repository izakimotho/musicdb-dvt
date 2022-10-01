import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class FooterComponent  implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}