import { AppComponent } from '@app/app.component';
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe(AppComponent.name, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  const mockedActivatedRoute = { params: of({ id: 1 }) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockedActivatedRoute }
      ]
    }).compileComponents();
    activatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should validate that the component is initialized correctly, including dependencies", () => {
    expect(component).toBeTruthy();    
  })
});
