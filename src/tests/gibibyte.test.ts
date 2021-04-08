import { DataUnit } from '../index';

test('Convert gibibytes (GiB) to bits (b)', () => {
    expect(DataUnit.GIBIBYTE.toBits(1)).toBe(8_589_934_592);
});

test('Convert gibibytes (GiB) to bytes (B)', () => {
    expect(DataUnit.GIBIBYTE.toBytes(1)).toBe(1_073_741_824);
});

test('Convert gibibytes (GiB) to kilobytes (kB)', () => {
    expect(DataUnit.GIBIBYTE.toKilobytes(1)).toBe(1_073_741.824);
});

test('Convert gibibytes (GiB) to kibibytes (KiB)', () => {
    expect(DataUnit.GIBIBYTE.toKibibytes(1)).toBe(1_048_576.534774);
});

test('Convert gibibytes (GiB) to megabytes (MB)', () => {
    expect(DataUnit.GIBIBYTE.toMegabytes(1)).toBe(1_073.741824);
});

test('Convert gibibytes (GiB) to mebibytes (MiB)', () => {
    expect(DataUnit.GIBIBYTE.toMebibytes(1)).toBe(1_024);
});

test('Convert gibibytes (GiB) to gigabytes (GB)', () => {
    expect(DataUnit.GIBIBYTE.toGigabytes(1)).toBe(1.073741824);
});

test('Convert gibibytes (GiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.toGibibytes(1)).toBe(1);
});

test('Convert bits (b) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.BIT)).toBe(0.00000000011641532182693481);
});

test('Convert bytes (B) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.BYTE)).toBe(0.0000000009313225746154785);
});

test('Convert kilobytes (kB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.KILOBYTE)).toBe(0.0000009313225746154785);
});

test('Convert kibibytes (KiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.KIBIBYTE)).toBe(0.00000095367431640625);
});

test('Convert megabytes (MB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.MEGABYTE)).toBe(0.000931323);
});

test('Convert mebibytes (MiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.MEBIBYTE)).toBe(0.0009765625);
});

test('Convert gigabytes (GB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.GIGABYTE)).toBe(0.9313225746154784);
});

test('Convert gibibytes (GiB) to gibibytes (GiB)', () => {
    expect(DataUnit.GIBIBYTE.convert(1, DataUnit.GIBIBYTE)).toBe(1);
});
