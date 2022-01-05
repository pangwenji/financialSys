import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerQueryComponent } from './partner-query.component';

describe('PartnerQueryComponent', () => {
  let component: PartnerQueryComponent;
  let fixture: ComponentFixture<PartnerQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
