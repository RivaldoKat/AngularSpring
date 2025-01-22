import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, NavbarComponent, FooterComponent,AppComponent],
      providers: [
        { provide: FaConfig, useValue: { defaultPrefix: '' } },
        { provide: FaIconLibrary, useValue: { addIcons: jest.fn() } },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the layout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    // Check if navbar is present
    expect(compiled.querySelector('app-navbar')).not.toBeNull();

    // Check if router-outlet is present
    expect(compiled.querySelector('router-outlet')).not.toBeNull();

    // Check if footer is present
    expect(compiled.querySelector('app-footer')).not.toBeNull();
  });
});
