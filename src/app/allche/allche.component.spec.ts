import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcheComponent } from './allche.component';

describe('AllcheComponent', () => {
  let component: AllcheComponent;
  let fixture: ComponentFixture<AllcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
