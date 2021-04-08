import { DataUnit } from '../index';

test('Convert bytes (B) to bits (b)', () => {
    expect(DataUnit.BYTE.toBits(1)).toBe(8);
});

test('Convert bytes (B) to bytes (B)', () => {
    expect(DataUnit.BYTE.toBytes(1)).toBe(1);
});

test('Convert bytes (B) to kilobytes (kB)', () => {
    expect(DataUnit.BYTE.toKilobytes(1)).toBe(0.001);
});

test('Convert bytes (B) to kibibytes (KiB)', () => {
    expect(DataUnit.BYTE.toKibibytes(1)).toBe(0.0009765625);
});

test('Convert bytes (B) to megabytes (MB)', () => {
    expect(DataUnit.BYTE.toMegabytes(1)).toBe(0.000001);
});

test('Convert bytes (B) to mebibytes (MiB)', () => {
    expect(DataUnit.BYTE.toMebibytes(1)).toBe(0.00000095367431640625);
});

test('Convert bytes (B) to gigabytes (GB)', () => {
    expect(DataUnit.BYTE.toGigabytes(1)).toBe(1e-9);
});

test('Convert bytes (B) to gibibytes (GiB)', () => {
    expect(DataUnit.BYTE.toGibibytes(1)).toBe(0.0000000009313225746154785);
});

test('Convert bits (b) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.BIT)).toBe(0.125);
});

test('Convert bytes (B) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.BYTE)).toBe(1);
});

test('Convert kilobytes (kB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.KILOBYTE)).toBe(1_000);
});

test('Convert kibibytes (KiB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.KIBIBYTE)).toBe(1_024);
});

test('Convert megabytes (MB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.MEGABYTE)).toBe(1_000_000);
});

test('Convert mebibytes (MiB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.MEBIBYTE)).toBe(1_049_000);
});

test('Convert gigabytes (GB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.GIGABYTE)).toBe(1_000_000_000);
});

test('Convert gibibytes (GiB) to bytes (B)', () => {
    expect(DataUnit.BYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1_073_741_824);
});
