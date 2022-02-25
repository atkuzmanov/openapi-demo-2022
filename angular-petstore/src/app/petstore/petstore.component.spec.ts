import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PetstoreComponent } from './petstore.component';

describe('PetstoreComponent', () => {
  let component: PetstoreComponent;
  let fixture: ComponentFixture<PetstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetstoreComponent ],
      imports: [HttpClientModule],
      providers: [HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
