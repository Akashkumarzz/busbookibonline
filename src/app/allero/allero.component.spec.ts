import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleroComponent } from './allero.component';

describe('AlleroComponent', () => {
  let component: AlleroComponent;
  let fixture: ComponentFixture<AlleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlleroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
