import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-shyamsundarashok-hello-world-dependency-injection',
  templateUrl: './shyamsundarashok-hello-world-dependency-injection.component.html',
  styleUrls: ['./shyamsundarashok-hello-world-dependency-injection.component.sass']
})
export class ShyamsundarashokHelloWorldDependencyInjectionComponent {

  count = 0;

  constructor(private logger: LoggerService) { }

  onLogMe(){
    this.logger.writeCount(this.count);
    this.count++;
  }

}
