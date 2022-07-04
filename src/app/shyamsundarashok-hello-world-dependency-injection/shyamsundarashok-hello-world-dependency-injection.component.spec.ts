import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyamsundarashokHelloWorldDependencyInjectionComponent } from './shyamsundarashok-hello-world-dependency-injection.component';

describe('ShyamsundarashokHelloWorldDependencyInjectionComponent', () => {
  let component: ShyamsundarashokHelloWorldDependencyInjectionComponent;
  let fixture: ComponentFixture<ShyamsundarashokHelloWorldDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyamsundarashokHelloWorldDependencyInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShyamsundarashokHelloWorldDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
