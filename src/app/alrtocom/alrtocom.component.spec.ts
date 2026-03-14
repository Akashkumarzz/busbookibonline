import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtocomComponent } from './alrtocom.component';

describe('AlrtocomComponent', () => {
  let component: AlrtocomComponent;
  let fixture: ComponentFixture<AlrtocomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtocomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
