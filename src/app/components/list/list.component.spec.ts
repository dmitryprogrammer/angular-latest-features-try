import {CommonModule} from '@angular/common';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ListComponent} from './list.component';
import {SharedModule} from '../../../shared/shared.module';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, SharedModule, ListComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    }).compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init counter', () => {
    expect(component.counter()).toEqual(0);
  });

  it('should update counter', () => {
    let i = 0;
    while (i < 10) {
      i++;
      component.counterIncrement();
      expect(component.counter()).toEqual(i);
    }
  });
});
