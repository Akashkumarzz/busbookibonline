import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertoalrComponent } from './pertoalr.component';

describe('PertoalrComponent', () => {
  let component: PertoalrComponent;
  let fixture: ComponentFixture<PertoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PertoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
