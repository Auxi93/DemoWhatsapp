import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicabeceraComponent } from './minicabecera.component';

describe('MinicabeceraComponent', () => {
  let component: MinicabeceraComponent;
  let fixture: ComponentFixture<MinicabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
