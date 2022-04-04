import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Exact Equality
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  })

  //Object testing
  it('object values', () => {
    const data = {
      name: "Kenan Maslesa"
    };
    expect(data).toEqual({name: "Kenan Maslesa"});
    // expect(data).toBe({name: "Kenan Maslesa"}); WRONG - (toBe should be used for primitive types)
  })

  //Truthiness
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  it('zero', () => {
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })




  //Numbers
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //for primitive types toBe and toEqual is the same
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); This won't work because of rounding error
    expect(value).toBeCloseTo(0.3);
  })




  //Strings
  it('there is no upper letter A in name Kenan', () => {
    const name = 'Kenan';
    expect(name).not.toMatch(/A/);
  })

  it('there are "learning", "learn" in sentence "Kenan is learning"', () => {
    const name = 'Kenan is learning';
    expect(name).toMatch(/learning/);
    expect(name).toMatch(/learn/);
    expect(name).toContain('learn');
  })



  //Arrays and iterables
  it('shopping list should has milk on it', () => {
    const shoppingList = [
      'bananas',
      'coffee',
      'milk'
    ];

    expect(shoppingList).toContain('milk');
  })


  //Exceptions
  it('compileAndroidCode should throw error', () => {
    expect(() => component.compileAndroidCode()).toThrow();
    expect(() => component.compileAndroidCode()).toThrow(Error);

    //Can also use the exact error message or a regexp
    expect(() => component.compileAndroidCode()).toThrow('you are using old Angular');
    expect(() => component.compileAndroidCode()).toThrow(/Angular/);
  })

  it('multiplying should return corrent result', () => {
    expect(component.multiplying(2,5)).toBe(10);
  })
});
