import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtoeroComponent } from './alrtoero.component';

describe('AlrtoeroComponent', () => {
  let component: AlrtoeroComponent;
  let fixture: ComponentFixture<AlrtoeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtoeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtoeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
