import { Component } from '@angular/core';

@Component({
  selector: 'app-shyamsundarashok-hello-world-bindings',
  templateUrl: './shyamsundarashok-hello-world-bindings.component.html',
  styleUrls: ['./shyamsundarashok-hello-world-bindings.component.sass']
})
export class ShyamsundarashokHelloWorldBindingsComponent  {

  sayHelloId= 1;
  fontColor="red";
  canClick = true;

  displayMessage(){
    alert("Message from Shyam Sundar Ashok's Hello World Binding component!");
  }
}
