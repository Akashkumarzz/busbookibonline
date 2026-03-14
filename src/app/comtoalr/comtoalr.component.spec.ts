import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtoalrComponent } from './comtoalr.component';

describe('ComtoalrComponent', () => {
  let component: ComtoalrComponent;
  let fixture: ComponentFixture<ComtoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComtoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComtoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
