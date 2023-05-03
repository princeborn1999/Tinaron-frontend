import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducers } from '../store/reducers';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    NgbCarouselModule,
    StoreModule.forFeature('cart', cartReducers)
  ],
  declarations: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    FooterComponent],
  exports: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    FooterComponent],
})
export class ComponentModule {}
