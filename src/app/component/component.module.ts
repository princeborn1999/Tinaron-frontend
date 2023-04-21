import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducers } from '../store/reducers';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('cart', cartReducers)
  ],
  declarations: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent],
  exports: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent],
})
export class ComponentModule {}
