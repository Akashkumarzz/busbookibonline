import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamtopComponent } from './namtop.component';

describe('NamtopComponent', () => {
  let component: NamtopComponent;
  let fixture: ComponentFixture<NamtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamtopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
