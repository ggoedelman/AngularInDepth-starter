import { StatusIconPipe } from './status-icon.pipe';

describe('StatusIconPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusIconPipe();
    expect(pipe).toBeTruthy();
  });
  it('Prospect should result in online', () => {
    const pipe = new StatusIconPipe(); // 1. SETUP: construct a new instance of the class.
    const x = pipe.transform('Prospect'); // 2. INVOKE the method
    expect(x).toEqual('online'); // 3. VERIFY the result of the method matches what is expected.
  });
  it('PROSPECT (uppercase) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('PROSPECT');
    expect(x).toEqual('online');
  });
  it('prospect (lowercase) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('prospect');
    expect(x).toEqual('online');
  });
  it('prOspEct (mixed case) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('prOspEct');
    expect(x).toEqual('online');

    it('Initial should result in users', () => {
      const pipe = new StatusIconPipe(); // 1. SETUP: construct a new instance of the class.
      const x = pipe.transform('Initial'); // 2. INVOKE the method
      expect(x).toEqual('users'); // 3. VERIFY the result of the method matches what is expected.
    });
    it('INITIAL (uppercase) should result in users', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('INITIAL');
      expect(x).toEqual('users');
    });
    it('initial (lowercase) should result in users', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('initial');
      expect(x).toEqual('users');
    });
    it('inItiAl (mixed case) should result in users', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('inItiAl');
      expect(x).toEqual('users');
    });

    it('Purchased should result in money', () => {
      const pipe = new StatusIconPipe(); // 1. SETUP: construct a new instance of the class.
      const x = pipe.transform('Purchased'); // 2. INVOKE the method
      expect(x).toEqual('money'); // 3. VERIFY the result of the method matches what is expected.
    });
    it('PURCHASED (uppercase) should result in money', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('PURCHASED');
      expect(x).toEqual('money');
    });
    it('purchased (lowercase) should result in money', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('purchased');
      expect(x).toEqual('money');
    });
    it('puRchAseD (mixed case) should result in money', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('puRchAseD');
      expect(x).toEqual('money');
    });

    it('null should result in users', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform(null);
      expect(x).toEqual('users');
    });
    it('empty string should result in users', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('');
      expect(x).toEqual('users');
    });

    it('null should result in online', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform(null);
      expect(x).toEqual('online');
    });
    it('empty string should result in online', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('');
      expect(x).toEqual('online');
    });

    it('null should result in money', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform(null);
      expect(x).toEqual('money');
    });
    it('empty string should result in money', () => {
      const pipe = new StatusIconPipe();
      const x = pipe.transform('');
      expect(x).toEqual('money');
    });
  });
});
