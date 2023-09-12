import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteTelaComponent } from './teste-tela.component';

describe('TesteComponentComponent', () => {
  let component: TesteTelaComponent;
  let fixture: ComponentFixture<TesteTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteTelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
