import { DataUnit } from '../index';

test('Convert mebibytes (MiB) to bits (b)', () => {
    expect(DataUnit.MEBIBYTE.toBits(1)).toBe(8_389_000);
});

test('Convert mebibytes (MiB) to bytes (B)', () => {
    expect(DataUnit.MEBIBYTE.toBytes(1)).toBe(1_049_000);
});

test('Convert mebibytes (MiB) to kilobytes (kB)', () => {
    expect(DataUnit.MEBIBYTE.toKilobytes(1)).toBe(1_048.58);
});

test('Convert mebibytes (MiB) to kibibytes (KiB)', () => {
    expect(DataUnit.MEBIBYTE.toKibibytes(1)).toBe(1_024);
});

test('Convert mebibytes (MiB) to megabytes (MB)', () => {
    expect(DataUnit.MEBIBYTE.toMegabytes(1)).toBe(1.04858);
});

test('Convert mebibytes (MiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.toMebibytes(1)).toBe(1);
});

test('Convert mebibytes (MiB) to gigabytes (GB)', () => {
    expect(DataUnit.MEBIBYTE.toGigabytes(1)).toBe(0.00104858);
});

test('Convert mebibytes (MiB) to gibibytes (GiB)', () => {
    expect(DataUnit.MEBIBYTE.toGibibytes(1)).toBe(0.0009765625);
});

test('Convert bits (b) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.BIT)).toBe(0.00000011920928955078125);
});

test('Convert bytes (B) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.BYTE)).toBe(0.00000095367431640625);
});

test('Convert kilobytes (kB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.KILOBYTE)).toBe(0.000953674);
});

test('Convert kibibyte (KiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.KIBIBYTE)).toBe(0.0009765625);
});

test('Convert megabytes (MB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.MEGABYTE)).toBe(0.953674);
});

test('Convert mebibytes (MiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.MEBIBYTE)).toBe(1);
});

test('Convert gigabytes (GB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.GIGABYTE)).toBe(953.674);
});

test('Convert gibibytes (GiB) to mebibytes (MiB)', () => {
    expect(DataUnit.MEBIBYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1_024);
});
