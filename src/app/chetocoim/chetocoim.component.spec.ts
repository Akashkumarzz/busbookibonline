import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetocoimComponent } from './chetocoim.component';

describe('ChetocoimComponent', () => {
  let component: ChetocoimComponent;
  let fixture: ComponentFixture<ChetocoimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChetocoimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChetocoimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
