import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguaricionComponent } from './configuaricion.component';

describe('ConfiguaricionComponent', () => {
  let component: ConfiguaricionComponent;
  let fixture: ComponentFixture<ConfiguaricionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguaricionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguaricionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
