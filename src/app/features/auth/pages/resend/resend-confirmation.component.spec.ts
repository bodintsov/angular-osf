import { MockComponent, MockProvider } from 'ng-mocks';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '@core/services/auth.service';
import { TextInputComponent } from '@osf/shared/components/text-input/text-input.component';

import { provideOSFCore } from '@testing/osf.testing.provider';

import { ResendConfirmationComponent } from './resend-confirmation.component';

describe('ResendConfirmationComponent', () => {
  let component: ResendConfirmationComponent;
  let fixture: ComponentFixture<ResendConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResendConfirmationComponent, MockComponent(TextInputComponent)],
      providers: [provideOSFCore(), MockProvider(AuthService)],
    });

    fixture = TestBed.createComponent(ResendConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
