import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyamsundarashokHelloWorldInterpolationComponent } from './shyamsundarashok-hello-world-interpolation.component';

describe('ShyamsundarashokHelloWorldInterpolationComponent', () => {
  let component: ShyamsundarashokHelloWorldInterpolationComponent;
  let fixture: ComponentFixture<ShyamsundarashokHelloWorldInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyamsundarashokHelloWorldInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyamsundarashokHelloWorldInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
