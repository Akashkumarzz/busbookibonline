import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtonamComponent } from './alrtonam.component';

describe('AlrtonamComponent', () => {
  let component: AlrtonamComponent;
  let fixture: ComponentFixture<AlrtonamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtonamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtonamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
