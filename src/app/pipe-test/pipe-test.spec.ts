import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTest } from './pipe-test';

describe('PipeTest', () => {
  let component: PipeTest;
  let fixture: ComponentFixture<PipeTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTest],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
