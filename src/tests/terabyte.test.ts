import { DataUnit } from '../index';

test('Convert terabytes (TB) to bits (b)', () => {
    expect(DataUnit.TERABYTE.toBits(1)).toBe(8_000_000_000_000);
});

test('Convert terabytes (TB) to bytes (B)', () => {
    expect(DataUnit.TERABYTE.toBytes(1)).toBe(1_000_000_000_000);
});

test('Convert terabytes (TB) to kilobytes (kB)', () => {
    expect(DataUnit.TERABYTE.toKilobytes(1)).toBe(1_000_000_000);
});

test('Convert terabytes (TB) to kibibytes (KiB)', () => {
    expect(DataUnit.TERABYTE.toKibibytes(1)).toBe(976_562_500);
});

test('Convert terabytes (TB) to megabytes (MB)', () => {
    expect(DataUnit.TERABYTE.toMegabytes(1)).toBe(1_000_000);
});

test('Convert terabytes (TB) to mebibytes (MiB)', () => {
    expect(DataUnit.TERABYTE.toMebibytes(1)).toBe(953_674.31640625);
});

test('Convert terabytes (TB) to gigabytes (GB)', () => {
    expect(DataUnit.TERABYTE.toGigabytes(1)).toBe(1_000);
});

test('Convert terabytes (TB) to gibibytes (GiB)', () => {
    expect(DataUnit.TERABYTE.toGibibytes(1)).toBe(931.3225746154785);
});

test('Convert terabytes (TB) to tebibytes (TiB)', () => {
    expect(DataUnit.TERABYTE.toTebibytes(1)).toBe(0.9094947017729282);
});

test('Convert terabytes (TB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.toTerabytes(1)).toBe(1);
});

test('Convert bits (b) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.BIT)).toBe(1.25e-13);
});

test('Convert bytes (B) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.BYTE)).toBe(0.000000000001);
});

test('Convert kilobytes (kB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.KILOBYTE)).toBe(0.000000001);
});

test('Convert kibibytes (KiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.KIBIBYTE)).toBe(0.000000001024);
});

test('Convert megabytes (MB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.MEGABYTE)).toBe(0.000001);
});

test('Convert mebibytes (MiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.MEBIBYTE)).toBe(0.000001048576);
});

test('Convert gigabytes (GB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.GIGABYTE)).toBe(0.001);
});

test('Convert gibibytes (GiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.GIBIBYTE)).toBe(0.001073741824);
});

test('Convert tebibytes (TiB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.TEBIBYTE)).toBe(1.099511627776);
});

test('Convert terabytes (TB) to terabytes (TB)', () => {
    expect(DataUnit.TERABYTE.convert(1, DataUnit.TERABYTE)).toBe(1);
});
