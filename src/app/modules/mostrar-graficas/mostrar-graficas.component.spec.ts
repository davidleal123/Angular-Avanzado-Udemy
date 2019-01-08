import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGraficasComponent } from './mostrar-graficas.component';

describe('MostrarGraficasComponent', () => {
  let component: MostrarGraficasComponent;
  let fixture: ComponentFixture<MostrarGraficasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarGraficasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
