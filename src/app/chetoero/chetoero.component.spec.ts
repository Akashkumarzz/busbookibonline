import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetoeroComponent } from './chetoero.component';

describe('ChetoeroComponent', () => {
  let component: ChetoeroComponent;
  let fixture: ComponentFixture<ChetoeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChetoeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChetoeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
