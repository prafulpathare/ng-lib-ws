import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTable } from './q-table';

describe('QTable', () => {
  let component: QTable;
  let fixture: ComponentFixture<QTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
