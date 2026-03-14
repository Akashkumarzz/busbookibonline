import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TritoalrComponent } from './tritoalr.component';

describe('TritoalrComponent', () => {
  let component: TritoalrComponent;
  let fixture: ComponentFixture<TritoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TritoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TritoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
