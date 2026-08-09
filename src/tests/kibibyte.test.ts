import { DataUnit } from '../index';

test('Convert kibibyte (KiB) to bits (b)', () => {
    expect(DataUnit.KIBIBYTE.toBits(1)).toBe(8_192);
});

test('Convert kibibyte (KiB) to bytes (B)', () => {
    expect(DataUnit.KIBIBYTE.toBytes(1)).toBe(1_024);
});

test('Convert kibibyte (KiB) to kilobytes (kB)', () => {
    expect(DataUnit.KIBIBYTE.toKilobytes(1)).toBe(1.024);
});

test('Convert kibibyte (KiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.toKibibytes(1)).toBe(1);
});

test('Convert kibibyte (KiB) to megabytes (MB)', () => {
    expect(DataUnit.KIBIBYTE.toMegabytes(1)).toBe(0.001024);
});

test('Convert kibibyte (KiB) to mebibytes (MiB)', () => {
    expect(DataUnit.KIBIBYTE.toMebibytes(1)).toBe(0.0009765625);
});

test('Convert kibibyte (KiB) to gigabytes (GB)', () => {
    expect(DataUnit.KIBIBYTE.toGigabytes(1)).toBe(1.024e-6);
});

test('Convert kibibyte (KiB) to gibibytes (GiB)', () => {
    expect(DataUnit.KIBIBYTE.toGibibytes(1)).toBe(9.5367431640625e-7);
});

test('Convert bits (b) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.BIT)).toBe(0.0001220703125);
});

test('Convert kibibytes (KiB) to terabytes (TB)', () => {
    expect(DataUnit.KIBIBYTE.toTerabytes(1)).toBe(1.024e-9);
});

test('Convert kibibytes (KiB) to tebibytes (TiB)', () => {
    expect(DataUnit.KIBIBYTE.toTebibytes(1)).toBe(9.313225746154785e-10);
});

test('Convert bytes (B) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.BYTE)).toBe(0.0009765625);
});

test('Convert kilobytes (kB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.KILOBYTE)).toBe(0.9765625);
});

test('Convert kibibyte (KiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.KIBIBYTE)).toBe(1);
});

test('Convert megabytes (MB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.MEGABYTE)).toBe(976.5625);
});

test('Convert mebibytes (MiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.MEBIBYTE)).toBe(1_024);
});

test('Convert gigabytes (GB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.GIGABYTE)).toBe(976562.5);
});

test('Convert gibibytes (GiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1048576);
});

test('Convert terabytes (TB) to kibibytes (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.TERABYTE)).toBe(976_562_500);
});

test('Convert tebibytes (TiB) to kibibytes (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.TEBIBYTE)).toBe(1_073_741_824);
});
