import { DataUnit } from '../index';

test('Convert kilobytes (kB) to bits (b)', () => {
    expect(DataUnit.KILOBYTE.toBits(1)).toBe(8_000);
});

test('Convert kilobytes (kB) to bytes (B)', () => {
    expect(DataUnit.KILOBYTE.toBytes(1)).toBe(1_000);
});

test('Convert kilobytes (kB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.toKilobytes(1)).toBe(1);
});

test('Convert kilobytes (kB) to kibibytes (KiB)', () => {
    expect(DataUnit.KILOBYTE.toKibibytes(1)).toBe(0.9765625);
});

test('Convert kilobytes (kB) to megabytes (MB)', () => {
    expect(DataUnit.KILOBYTE.toMegabytes(1)).toBe(0.001);
});

test('Convert kilobytes (kB) to mebibytes (MiB)', () => {
    expect(DataUnit.KILOBYTE.toMebibytes(1)).toBe(0.000953674);
});

test('Convert kilobytes (kB) to gigabytes (GB)', () => {
    expect(DataUnit.KILOBYTE.toGigabytes(1)).toBe(0.000001);
});

test('Convert kilobytes (kB) to gibibytes (GiB)', () => {
    expect(DataUnit.KILOBYTE.toGibibytes(1)).toBe(9.313225746154785e-7);
});

test('Convert bits (b) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.BIT)).toBe(0.000125);
});

test('Convert bytes (B) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.BYTE)).toBe(0.001);
});

test('Convert kilobytes (kB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.KILOBYTE)).toBe(1);
});

test('Convert kibibytes (KiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.KIBIBYTE)).toBe(1.024);
});

test('Convert megabytes (MB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.MEGABYTE)).toBe(1_000);
});

test('Convert mebibytes (MiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.MEBIBYTE)).toBe(1_048.58);
});

test('Convert gigabytes (GB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.GIGABYTE)).toBe(1_000_000);
});

test('Convert gibibytes (GiB) to kilobytes (kB)', () => {
    expect(DataUnit.KILOBYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1_073_741.824);
});
