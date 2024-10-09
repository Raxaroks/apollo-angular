import { isStringEmpty } from '@app/shared/utils';

describe("util: strings", () => {
  it("the isStrEmpty function should validate whether a string is empty or not", () => {
    expect( isStringEmpty("hola, mundo!") ).toBeFalse();
    expect( isStringEmpty("") ).toBeTrue();
    expect( isStringEmpty(undefined) ).toBeTrue();
    expect( isStringEmpty(null) ).toBeTrue();
  })
});
