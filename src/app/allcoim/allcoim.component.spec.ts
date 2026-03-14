import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcoimComponent } from './allcoim.component';

describe('AllcoimComponent', () => {
  let component: AllcoimComponent;
  let fixture: ComponentFixture<AllcoimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllcoimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcoimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
