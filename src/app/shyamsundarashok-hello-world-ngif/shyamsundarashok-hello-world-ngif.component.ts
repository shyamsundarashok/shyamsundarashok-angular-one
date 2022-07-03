import { Component } from '@angular/core';

@Component({
  selector: 'app-shyamsundarashok-hello-world-ngif',
  templateUrl: './shyamsundarashok-hello-world-ngif.component.html',
  styleUrls: ['./shyamsundarashok-hello-world-ngif.component.sass']
})
export class ShyamsundarashokHelloWorldNgifComponent {

  canEdit = false;

  message= "Try to edit me!!";

  onEditClick(){
    this.canEdit = !this.canEdit;
  }

}
