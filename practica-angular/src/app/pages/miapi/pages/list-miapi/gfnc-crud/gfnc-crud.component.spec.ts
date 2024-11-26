import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfncCrudComponent } from './gfnc-crud.component';

describe('GfncCrudComponent', () => {
  let component: GfncCrudComponent;
  let fixture: ComponentFixture<GfncCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GfncCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GfncCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
