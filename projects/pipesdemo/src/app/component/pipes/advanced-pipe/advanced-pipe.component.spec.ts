import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPipeComponent } from './advanced-pipe.component';

describe('AdvancedPipeComponent', () => {
  let component: AdvancedPipeComponent;
  let fixture: ComponentFixture<AdvancedPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
