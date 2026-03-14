import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamtoalrComponent } from './namtoalr.component';

describe('NamtoalrComponent', () => {
  let component: NamtoalrComponent;
  let fixture: ComponentFixture<NamtoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamtoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamtoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
