import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTesterComponent } from './http-tester.component';

describe('HttpTesterComponent', () => {
  let component: HttpTesterComponent;
  let fixture: ComponentFixture<HttpTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
