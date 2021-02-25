import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosersComponent } from './losers.component';

describe('LosersComponent', () => {
  let component: LosersComponent;
  let fixture: ComponentFixture<LosersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
