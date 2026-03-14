import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoalrComponent } from './kantoalr.component';

describe('KantoalrComponent', () => {
  let component: KantoalrComponent;
  let fixture: ComponentFixture<KantoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
