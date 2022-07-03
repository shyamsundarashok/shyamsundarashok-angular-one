import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShyamsundarashokHelloWorldBindingsComponent } from './shyamsundarashok-hello-world-bindings/shyamsundarashok-hello-world-bindings.component';
import { ShyamsundarashokHelloWorldInterpolationComponent } from './shyamsundarashok-hello-world-interpolation/shyamsundarashok-hello-world-interpolation.component';
import { ShyamsundarashokHelloWorldNgifComponent } from './shyamsundarashok-hello-world-ngif/shyamsundarashok-hello-world-ngif.component';
import { ShyamsundarashokHelloWorldComponent } from './shyamsundarashok-hello-world/shyamsundarashok-hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    ShyamsundarashokHelloWorldComponent,
    ShyamsundarashokHelloWorldInterpolationComponent,
    ShyamsundarashokHelloWorldBindingsComponent,
    ShyamsundarashokHelloWorldNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
