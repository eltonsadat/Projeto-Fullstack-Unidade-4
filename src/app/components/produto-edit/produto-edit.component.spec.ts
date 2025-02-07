import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEditComponent } from './produto-edit.component';

describe('ProdutoEditComponent', () => {
  let component: ProdutoEditComponent;
  let fixture: ComponentFixture<ProdutoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
