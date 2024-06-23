import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationTableComponent } from './integration-table.component';

describe('IntegrationTableComponent', () => {
  let component: IntegrationTableComponent;
  let fixture: ComponentFixture<IntegrationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
