import { DataUnit } from '../index';

test('Convert megabytes (MB) to bits (b)', () => {
    expect(DataUnit.MEGABYTE.toBits(1)).toBe(8_000_000);
});

test('Convert megabytes (MB) to bytes (B)', () => {
    expect(DataUnit.MEGABYTE.toBytes(1)).toBe(1_000_000);
});

test('Convert megabytes (MB) to kilobytes (kB)', () => {
    expect(DataUnit.MEGABYTE.toKilobytes(1)).toBe(1_000);
});

test('Convert megabytes (MB) to kibibytes (KiB)', () => {
    expect(DataUnit.MEGABYTE.toKibibytes(1)).toBe(976.563);
});

test('Convert megabytes (MB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.toMegabytes(1)).toBe(1);
});

test('Convert megabytes (MB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEGABYTE.toMebibytes(1)).toBe(0.953674);
});

test('Convert megabyte (MB) to gigabytes (GB)', () => {
    expect(DataUnit.MEGABYTE.toGigabytes(1)).toBe(0.001);
});

test('Convert megabyte (MB) to gibibytes (GiB)', () => {
    expect(DataUnit.MEGABYTE.toGibibytes(1)).toBe(0.000931323);
});

test('Convert bits (b) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.BIT)).toBe(0.000000125);
});

test('Convert bytes (B) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.BYTE)).toBe(0.000001);
});

test('Convert kilobytes (kB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.KILOBYTE)).toBe(0.001);
});

test('Convert kibibytes (KiB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.KIBIBYTE)).toBe(0.001024);
});

test('Convert megabytes (MB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.MEGABYTE)).toBe(1);
});

test('Convert mebibytes (MiB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.MEBIBYTE)).toBe(1.04858);
});

test('Convert gigabytes (GB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.GIGABYTE)).toBe(1_000);
});

test('Convert gibibytes (GiB) to megabytes (MB)', () => {
    expect(DataUnit.MEGABYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1_073.741824);
});
