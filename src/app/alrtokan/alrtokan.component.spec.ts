import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtokanComponent } from './alrtokan.component';

describe('AlrtokanComponent', () => {
  let component: AlrtokanComponent;
  let fixture: ComponentFixture<AlrtokanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtokanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtokanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
