import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CapstoneService } from './capstone.service';
import { NewCapstoneFormComponent } from './new-capstone-form/new-capstone-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { ListCapstoneComponent } from './list-capstone/list-capstone.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [ {
  path: '',  //default component to display
  component: ListCapstoneComponent
}, {
  path: 'addCapstone',  //when capstones added 
  component: NewCapstoneFormComponent
}, {
  path: 'editCapstone/:_id', //when capstones edited 
  component: NewCapstoneFormComponent 
}, {
  path: 'listCapstone',  //when capstones listed
  component: ListCapstoneComponent
}, {
  path: '**',  //when path cannot be found
  component: NotFoundComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    NewCapstoneFormComponent,
    NavigationMenuComponent,
    ListCapstoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CapstoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
