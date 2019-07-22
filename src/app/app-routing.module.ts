import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpecialOffersComponent } from './components/landing-page/special-offers/special-offers.component';
import {RedWhiteCategoriesComponent} from './components/landing-page/red-white-categories/red-white-categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { PolicyComponent } from './components/footer/policy/policy.component';
import { TermOfServicesComponent } from './components/footer/term-of-services/term-of-services.component';
import { LoginRegistrationModalComponent } from './components/login-registration-modal/login-registration-modal.component';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'landing-special-offers', component: SpecialOffersComponent },
  { path: 'category', component: RedWhiteCategoriesComponent },
  {path: 'products/category-white', component: ProductsComponent },
  {path: 'products/category-red', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'term-of-services', component: TermOfServicesComponent },
  { path: 'log-reg', component: LoginRegistrationModalComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
