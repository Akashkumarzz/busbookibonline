import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetomyComponent } from './chetomy.component';

describe('ChetomyComponent', () => {
  let component: ChetomyComponent;
  let fixture: ComponentFixture<ChetomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChetomyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChetomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
