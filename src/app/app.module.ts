import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductItemComponent,
    CartComponent,
    ProductItemDetailComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
