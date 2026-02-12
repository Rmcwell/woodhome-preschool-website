import { Component } from '@angular/core';
import { BaseHeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-parent-resources',
  imports: [
    BaseHeroComponent
  ],
  templateUrl: './parentResources.html',
  styleUrls: ['./parentResources.css']

})
export class ParentResourcesPage {

}