import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RealtimeInputComponent} from './realtime-input.component';

describe('RealtimeInputComponent', () => {
  let component: RealtimeInputComponent;
  let fixture: ComponentFixture<RealtimeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RealtimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
