import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { StatsComponent } from '../../stats/stats.component';
import { DestinationComponent } from '../../destination/destination.component';
import { FeaturesComponent } from '../features/features.component';
import { PricingComponent } from '../pricing/pricing.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, StatsComponent, DestinationComponent, FeaturesComponent, PricingComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
