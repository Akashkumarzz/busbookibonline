import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtocheComponent } from './alrtoche.component';

describe('AlrtocheComponent', () => {
  let component: AlrtocheComponent;
  let fixture: ComponentFixture<AlrtocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlrtocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlrtocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
