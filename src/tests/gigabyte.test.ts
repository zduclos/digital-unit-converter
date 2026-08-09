import { DataUnit } from '../index';

test('Convert gigabytes (GB) to bits (b)', () => {
    expect(DataUnit.GIGABYTE.toBits(1)).toBe(8_000_000_000);
});

test('Convert gigabytes (GB) to bytes (B)', () => {
    expect(DataUnit.GIGABYTE.toBytes(1)).toBe(1_000_000_000);
});

test('Convert gigabytes (GB) to kilobytes (kB)', () => {
    expect(DataUnit.GIGABYTE.toKilobytes(1)).toBe(1_000_000);
});

test('Convert gigabytes (GB) to kibibytes (KiB)', () => {
    expect(DataUnit.GIGABYTE.toKibibytes(1)).toBe(976562.5);
});

test('Convert gigabytes (GB) to megabytes (MB)', () => {
    expect(DataUnit.GIGABYTE.toMegabytes(1)).toBe(1_000);
});

test('Convert gigabytes (GB) to mebibytes (MiB)', () => {
    expect(DataUnit.GIGABYTE.toMebibytes(1)).toBe(953.67431640625);
});

test('Convert gigabytes (GB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.toGigabytes(1)).toBe(1);
});

test('Convert gigabytes (GB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIGABYTE.toGibibytes(1)).toBe(0.9313225746154785);
});

test('Convert gigabytes (GB) to terabytes (TB)', () => {
    expect(DataUnit.GIGABYTE.toTerabytes(1)).toBe(0.001);
});

test('Convert gigabytes (GB) to tebibytes (TiB)', () => {
    expect(DataUnit.GIGABYTE.toTebibytes(1)).toBe(0.0009094947017729282);
});

test('Convert bits (b) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.BIT)).toBe(0.000000000125);
});

test('Convert bytes (B) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.BYTE)).toBe(0.000000001);
});

test('Convert kilobytes (kB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.KILOBYTE)).toBe(0.000001);
});

test('Convert kibibytes (KiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.KIBIBYTE)).toBe(0.000001024);
});

test('Convert megabytes (MB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.MEGABYTE)).toBe(0.001);
});

test('Convert mebibytes (MiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.MEBIBYTE)).toBe(0.001048576);
});

test('Convert gigabytes (GB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.GIGABYTE)).toBe(1);
});

test('Convert gibibytes (GiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1.073741824);
});

test('Convert terabytes (TB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.TERABYTE)).toBe(1_000);
});

test('Convert tebibytes (TiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIGABYTE.convert(1, DataUnit.TEBIBYTE)).toBe(1_099.511627776);
});
