import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtojayComponent } from './alrtojay.component';

describe('AlrtojayComponent', () => {
  let component: AlrtojayComponent;
  let fixture: ComponentFixture<AlrtojayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtojayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtojayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
