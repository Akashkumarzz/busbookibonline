import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltoalrComponent } from './saltoalr.component';

describe('SaltoalrComponent', () => {
  let component: SaltoalrComponent;
  let fixture: ComponentFixture<SaltoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaltoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaltoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
