import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErotoalrComponent } from './erotoalr.component';

describe('ErotoalrComponent', () => {
  let component: ErotoalrComponent;
  let fixture: ComponentFixture<ErotoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErotoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErotoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
