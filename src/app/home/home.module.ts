import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from '../home/cards/cards.component';
import { BrowserModule } from '@angular/platform-browser'
import {MatInputModule} from '@angular/material/input';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   
         CardsComponent,
         ContactComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    MatInputModule,
    FormsModule
   
  ],
  exports:[
    CardsComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class homeModule { }
