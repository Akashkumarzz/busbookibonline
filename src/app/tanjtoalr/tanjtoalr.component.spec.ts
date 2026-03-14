import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanjtoalrComponent } from './tanjtoalr.component';

describe('TanjtoalrComponent', () => {
  let component: TanjtoalrComponent;
  let fixture: ComponentFixture<TanjtoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanjtoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanjtoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
