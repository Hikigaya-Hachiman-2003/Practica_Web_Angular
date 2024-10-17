import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiapiComponent } from './miapi.component';

describe('MiapiComponent', () => {
  let component: MiapiComponent;
  let fixture: ComponentFixture<MiapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
