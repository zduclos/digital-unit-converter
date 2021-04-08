import { DataUnit } from '../index';

test('Convert bits (b) to bits (b)', () => {
    expect(DataUnit.BIT.toBits(1)).toBe(1);
});

test('Convert bits (b) to bytes (B)', () => {
    expect(DataUnit.BIT.toBytes(1)).toBe(0.125);
});

test('Convert bits (b) to kilobytes (kB)', () => {
    expect(DataUnit.BIT.toKilobytes(1)).toBe(0.000125);
});

test('Convert bits (b) to kibibytes (KiB)', () => {
    expect(DataUnit.BIT.toKibibytes(1)).toBe(0.0001220703125);
});

test('Convert bits (b) to megabytes (MB)', () => {
    expect(DataUnit.BIT.toMegabytes(1)).toBe(1.25e-7);
});

test('Convert bits (b) to mebibytes (MiB)', () => {
    expect(DataUnit.BIT.toMebibytes(1)).toBe(1.1920928955078125e-7);
});

test('Convert bits (b) to gigabytes (GB)', () => {
    expect(DataUnit.BIT.toGigabytes(1)).toBe(1.25e-10);
});

test('Convert bits (b) to gibibytes (GiB)', () => {
    expect(DataUnit.BIT.toGibibytes(1)).toBe(1.1641532182693481e-10);
});

test('Convert bits (b) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.BIT)).toBe(1);
});

test('Convert bytes (B) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.BYTE)).toBe(8);
});

test('Convert kilobytes (kB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.KILOBYTE)).toBe(8_000);
});

test('Convert kibibytes (KiB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.KIBIBYTE)).toBe(8_192);
});

test('Convert megabytes (MB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.MEGABYTE)).toBe(8_000_000);
});

test('Convert mebibytes (MiB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.MEBIBYTE)).toBe(8_389_000);
});

test('Convert gigabytes (GB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.GIGABYTE)).toBe(8_000_000_000);
});

test('Convert gibibytes (GiB) to bits (b)', () => {
    expect(DataUnit.BIT.convert(1, DataUnit.GIBIBYTE)).toBe(8_589_934_592);
});
