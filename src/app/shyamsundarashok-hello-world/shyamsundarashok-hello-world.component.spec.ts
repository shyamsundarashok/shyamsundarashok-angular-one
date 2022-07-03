import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyamsundarashokHelloWorldComponent } from './shyamsundarashok-hello-world.component';

describe('ShyamsundarashokHelloWorldComponent', () => {
  let component: ShyamsundarashokHelloWorldComponent;
  let fixture: ComponentFixture<ShyamsundarashokHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyamsundarashokHelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyamsundarashokHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
