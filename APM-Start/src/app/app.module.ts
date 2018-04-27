import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductService } from './product-list/product.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // define which of our components belong to this module
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [ // define the external modules that we want for our module
    BrowserModule,
    FormsModule
  ],
  providers: [ ProductService ], // for services
  bootstrap: [AppComponent] // define the start up component
})
export class AppModule { }
