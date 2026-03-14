import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtoperComponent } from './alrtoper.component';

describe('AlrtoperComponent', () => {
  let component: AlrtoperComponent;
  let fixture: ComponentFixture<AlrtoperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtoperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
