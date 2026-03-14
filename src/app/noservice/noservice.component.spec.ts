import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoserviceComponent } from './noservice.component';

describe('NoserviceComponent', () => {
  let component: NoserviceComponent;
  let fixture: ComponentFixture<NoserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
