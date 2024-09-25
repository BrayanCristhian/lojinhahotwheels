import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovProdutoComponent } from './mov-produto.component';

describe('MovProdutoComponent', () => {
  let component: MovProdutoComponent;
  let fixture: ComponentFixture<MovProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
