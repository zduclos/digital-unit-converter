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
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.MEGABYTE)).toBe(976.563);
});

test('Convert mebibytes (MiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.MEBIBYTE)).toBe(1_024);
});

test('Convert gigabytes (GB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.GIGABYTE)).toBe(9765632.5);
});

test('Convert gibibytes (GiB) to kibibyte (KiB)', () => {
    expect(DataUnit.KIBIBYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1_048_576.534774);
});
