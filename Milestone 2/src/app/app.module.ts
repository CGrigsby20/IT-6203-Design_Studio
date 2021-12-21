import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { HotelbookingService } from './hotelbooking.service';
import { CarrentalService } from './carrental.service';
import { DestinationService } from './destination.service';
import { FlightService } from './flight.service';
import { NewHotelbookingFormComponent } from './new-hotelbooking-form/new-hotelbooking-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { ListHotelbookingsComponent } from './list-hotelbookings/list-hotelbookings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewCarrentalFormComponent } from './new-carrental-form/new-carrental-form.component';
import { ListCarrentalsComponent } from './list-carrentals/list-carrentals.component';
import { NewDestinationFormComponent } from './new-destination-form/new-destination-form.component';
import { ListDestinationsComponent } from './list-destinations/list-destinations.component';
import { NewFlightFormComponent } from './new-flight-form/new-flight-form.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';

const appRoutes: Routes = [{
    path: '',  //default component to display
    component: ListHotelbookingsComponent
  }, 
  {
    path: 'addHotelbookings',  //when hotelbookings added 
    component: NewHotelbookingFormComponent
  }, 
  {
    path: 'editHotelbooking/:_id', //when hotelbookings edited 
    component: NewHotelbookingFormComponent
  }, 
  {
    path: 'listHotelbookings',  //when hotelbookings listed
    component: ListHotelbookingsComponent
  },
  {
    path: 'addCarrentals',  //when carrentals added 
    component: NewCarrentalFormComponent
  }, 
  {
    path: 'editCarrental/:_id', //when carrentals edited 
    component: NewCarrentalFormComponent
  }, 
  {
    path: 'listCarrentals',  //when carrentals listed
    component: ListCarrentalsComponent
  },
  {
    path: 'addDestinations',  //when destinations added 
    component: NewDestinationFormComponent
  }, 
  {
    path: 'editDestination/:_id', //when destinations edited 
    component: NewDestinationFormComponent
  }, 
  {
    path: 'listDestinations',  //when destinations listed
    component: ListDestinationsComponent
  },
  {
    path: 'addFlights',  //when flights added 
    component: NewFlightFormComponent
  }, 
  {
    path: 'editFlight/:_id', //when flights edited 
    component: NewFlightFormComponent
  }, 
  {
    path: 'listFlights',  //when flights listed
    component: ListFlightsComponent
  }, 
  {
    path: '**',  //when path cannot be found
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NewHotelbookingFormComponent,
    NavigationMenuComponent,
    ListHotelbookingsComponent,
    NotFoundComponent,
    NewCarrentalFormComponent,
    ListCarrentalsComponent,
    NewDestinationFormComponent,
    ListDestinationsComponent,
    NewFlightFormComponent,
    ListFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HotelbookingService,CarrentalService,DestinationService,FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
