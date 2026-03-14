import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetoalrComponent } from './chetoalr.component';

describe('ChetoalrComponent', () => {
  let component: ChetoalrComponent;
  let fixture: ComponentFixture<ChetoalrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChetoalrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChetoalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
