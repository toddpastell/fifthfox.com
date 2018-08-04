import { GuitarModule } from './guitar.module';

describe('GuitarModule', () => {
  let guitarModule: GuitarModule;

  beforeEach(() => {
    guitarModule = new GuitarModule();
  });

  it('should create an instance', () => {
    expect(guitarModule).toBeTruthy();
  });
});
