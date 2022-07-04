import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyamsundarashokHelloWorldNgifComponent } from './shyamsundarashok-hello-world-ngif.component';

describe('ShyamsundarashokHelloWorldNgifComponent', () => {
  let component: ShyamsundarashokHelloWorldNgifComponent;
  let fixture: ComponentFixture<ShyamsundarashokHelloWorldNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyamsundarashokHelloWorldNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyamsundarashokHelloWorldNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
