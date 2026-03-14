import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltriComponent } from './alltri.component';

describe('AlltriComponent', () => {
  let component: AlltriComponent;
  let fixture: ComponentFixture<AlltriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlltriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
