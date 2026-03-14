import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmtcComponent } from './bmtc.component';

describe('BmtcComponent', () => {
  let component: BmtcComponent;
  let fixture: ComponentFixture<BmtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmtcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
