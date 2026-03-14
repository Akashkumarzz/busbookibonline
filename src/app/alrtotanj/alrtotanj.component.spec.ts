import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtotanjComponent } from './alrtotanj.component';

describe('AlrtotanjComponent', () => {
  let component: AlrtotanjComponent;
  let fixture: ComponentFixture<AlrtotanjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtotanjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtotanjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
