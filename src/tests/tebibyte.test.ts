import { DataUnit } from '../index';

test('Convert tebibytes (TiB) to bits (b)', () => {
    expect(DataUnit.TEBIBYTE.toBits(1)).toBe(8_796_093_022_208);
});

test('Convert tebibytes (TiB) to bytes (B)', () => {
    expect(DataUnit.TEBIBYTE.toBytes(1)).toBe(1_099_511_627_776);
});

test('Convert tebibytes (TiB) to kilobytes (kB)', () => {
    expect(DataUnit.TEBIBYTE.toKilobytes(1)).toBe(1_099_511_627.776);
});

test('Convert tebibytes (TiB) to kibibytes (KiB)', () => {
    expect(DataUnit.TEBIBYTE.toKibibytes(1)).toBe(1_073_741_824);
});

test('Convert tebibytes (TiB) to megabytes (MB)', () => {
    expect(DataUnit.TEBIBYTE.toMegabytes(1)).toBe(1_099_511.627776);
});

test('Convert tebibytes (TiB) to mebibytes (MiB)', () => {
    expect(DataUnit.TEBIBYTE.toMebibytes(1)).toBe(1_048_576);
});

test('Convert tebibytes (TiB) to gigabytes (GB)', () => {
    expect(DataUnit.TEBIBYTE.toGigabytes(1)).toBe(1_099.511627776);
});

test('Convert tebibytes (TiB) to gibibytes (GiB)', () => {
    expect(DataUnit.TEBIBYTE.toGibibytes(1)).toBe(1_024);
});

test('Convert tebibytes (TiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.toTebibytes(1)).toBe(1);
});

test('Convert tebibytes (TiB) to terabytes (TB)', () => {
    expect(DataUnit.TEBIBYTE.toTerabytes(1)).toBe(1.099511627776);
});

test('Convert bits (b) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.BIT)).toBe(1.1368683772161603e-13);
});

test('Convert bytes (B) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.BYTE)).toBe(9.094947017729282e-13);
});

test('Convert kilobytes (kB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.KILOBYTE)).toBe(9.094947017729282e-10);
});

test('Convert kibibytes (KiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.KIBIBYTE)).toBe(9.313225746154785e-10);
});

test('Convert megabytes (MB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.MEGABYTE)).toBe(0.0000009094947017729282);
});

test('Convert mebibytes (MiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.MEBIBYTE)).toBe(0.00000095367431640625);
});

test('Convert gigabytes (GB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.GIGABYTE)).toBe(0.0009094947017729282);
});

test('Convert gibibytes (GiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.GIBIBYTE)).toBe(0.0009765625);
});

test('Convert tebibytes (TiB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.TEBIBYTE)).toBe(1);
});

test('Convert terabytes (TB) to tebibytes (TiB)', () => {
    expect(DataUnit.TEBIBYTE.convert(1, DataUnit.TERABYTE)).toBe(0.9094947017729282);
});
