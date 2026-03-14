import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtotriComponent } from './alrtotri.component';

describe('AlrtotriComponent', () => {
  let component: AlrtotriComponent;
  let fixture: ComponentFixture<AlrtotriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtotriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtotriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
