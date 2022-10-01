import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent {}
