import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
  ],
  imports: [
    BrowserModule,CoreModule,
=======
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,ShopModule,
>>>>>>> e1651bc75cd962caae43389539023ec400308559
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
