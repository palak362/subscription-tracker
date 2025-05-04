import { Component } from '@angular/core';

@Component({
  selector: 'subscription-list',  // This selector should match the tag in your HTML
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent {
  subscriptions = [
    { name: 'Netflix', cost: 10 },
    { name: 'Spotify', cost: 5 },
  ];
}
