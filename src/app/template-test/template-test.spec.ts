import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTest } from './template-test';

describe('TemplateTest', () => {
  let component: TemplateTest;
  let fixture: ComponentFixture<TemplateTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateTest],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
