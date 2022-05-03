import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrformComponent } from './pcrform.component';

describe('PcrformComponent', () => {
  let component: PcrformComponent;
  let fixture: ComponentFixture<PcrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcrformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
