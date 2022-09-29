import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserIconComponent } from './shared';
import { CartIconComponent } from './shared/components/icons/cart-icon.component';
import { AboutComponent } from './shophouse/about/about.component';
import { CartComponent } from './shophouse/cart/cart.component';
import { HomeComponent } from './shophouse/home/home.component';
import { FooterComponent } from './shophouse/layout/footer/footer.component';
import { HeaderComponent } from './shophouse/layout/header/header.component';
import { ProfileComponent } from './shophouse/profile/profile.component';
import { ProductPageComponent } from './shophouse/shop/product-page/product-page.component';
import { ShopCategoryComponent } from './shophouse/shop/shop-category/shop-category.component';
import { ShopComponent } from './shophouse/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartIconComponent,
    UserIconComponent,
    ShopComponent,
    ShopCategoryComponent,
    ProductPageComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {path: 'shop/:name', component: ShopCategoryComponent},
      { path: 'shop', component: ShopComponent},
      {path: 'about', component: AboutComponent},
      {path: 'products/:id', component: ProductPageComponent},
      {path: 'cart', component: CartComponent},
      {path: 'profile', component: ProfileComponent},
      {path: '', redirectTo:'home', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
