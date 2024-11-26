import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfncModificarComponent } from './gfnc-modificar.component';

describe('GfncModificarComponent', () => {
  let component: GfncModificarComponent;
  let fixture: ComponentFixture<GfncModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GfncModificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GfncModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
