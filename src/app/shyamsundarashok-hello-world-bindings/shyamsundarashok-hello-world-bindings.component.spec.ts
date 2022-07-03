import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyamsundarashokHelloWorldBindingsComponent } from './shyamsundarashok-hello-world-bindings.component';

describe('ShyamsundarashokHelloWorldBindingsComponent', () => {
  let component: ShyamsundarashokHelloWorldBindingsComponent;
  let fixture: ComponentFixture<ShyamsundarashokHelloWorldBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyamsundarashokHelloWorldBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyamsundarashokHelloWorldBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
