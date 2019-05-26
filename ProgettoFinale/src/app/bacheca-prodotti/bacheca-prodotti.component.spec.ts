import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaProdottiComponent } from './bacheca-prodotti.component';

describe('BachecaProdottiComponent', () => {
  let component: BachecaProdottiComponent;
  let fixture: ComponentFixture<BachecaProdottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachecaProdottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachecaProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
