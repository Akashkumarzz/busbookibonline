import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtosalComponent } from './alrtosal.component';

describe('AlrtosalComponent', () => {
  let component: AlrtosalComponent;
  let fixture: ComponentFixture<AlrtosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtosalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
