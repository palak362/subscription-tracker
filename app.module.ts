import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // For ngModel support

import { AppComponent } from './app.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';  // Import SubscriptionListComponent

@NgModule({
  declarations: [
    AppComponent,                // Declare AppComponent
    SubscriptionListComponent    // Declare SubscriptionListComponent here
  ],
  imports: [
    BrowserModule,               // Import BrowserModule
    FormsModule                  // Import FormsModule for ngModel (if you're using ngModel)
  ],
  providers: [],
  bootstrap: [AppComponent]       // Bootstrap with AppComponent
})
export class AppModule { }

