import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonButton } from './neon-button';

describe('NeonButton', () => {
  let component: NeonButton;
  let fixture: ComponentFixture<NeonButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonButton],
    }).compileComponents();

    fixture = TestBed.createComponent(NeonButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
