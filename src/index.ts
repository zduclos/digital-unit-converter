type ToFunction = (val: number) => number;

/**
 * Utility to convert units of digital information across units.
 */
export class DataUnit {
    /**
     * Bit (b). Data unit representing a binary digit
     */
    public static readonly BIT: DataUnit = new DataUnit(
        (v) => v,
        (v) => v / 8,
        (v) => v * 1.25e-4,
        (v) => v / 8192,
        (v) => v * 1.25e-7,
        (v) => v / (8 * Math.pow(1024, 2)),
        (v) => v * 1.25e-10,
        (v) => v / (8 * Math.pow(1024, 3)),
        (v, u) => u.toBitsFn(v)
    );

    /**
     * Byte (B). Data unit representing 8 bits
     */
    public static readonly BYTE: DataUnit = new DataUnit(
        (v) => v * 8,
        (v) => v,
        (v) => v / 1000,
        (v) => v / 1024,
        (v) => v * 1e-6,
        (v) => v / Math.pow(1024, 2),
        (v) => v * 1e-9,
        (v) => v / Math.pow(1024, 3),
        (v, u) => u.toBytesFn(v)
    );

    /**
     * Kilobyte (kB). Decimal data unit representing 1,000 bytes
     */
    public static readonly KILOBYTE: DataUnit = new DataUnit(
        (v) => v * 8000,
        (v) => v * 1000,
        (v) => v,
        (v) => v / 1.024,
        (v) => v / 1000,
        (v) => v * 0.000953674,
        (v) => v / 1e6,
        (v) => v / 1073741.824,
        (v, u) => u.toKilobytesFn(v)
    );

    /**
     * Kibibyte (KiB). Binary data unit representing 1,024 bytes
     */
    public static readonly KIBIBYTE: DataUnit = new DataUnit(
        (v) => v * 8192,
        (v) => v * 1024,
        (v) => v * 1.024,
        (v) => v,
        (v) => v * 0.001024,
        (v) => v / 1024,
        (v) => v * 1.024e-6,
        (v) => v / Math.pow(1024, 2),
        (v, u) => u.toKibibytesFn(v)
    );

    /**
     * Megabyte (MB). Decimal data unit representing (1,000)^2 bytes
     */
    public static readonly MEGABYTE: DataUnit = new DataUnit(
        (v) => v * 8e6,
        (v) => v * 1e6,
        (v) => v * 1000,
        (v) => v * 976.563,
        (v) => v,
        (v) => v * 0.953674,
        (v) => v / 1000,
        (v) => v * 0.000931323,
        (v, u) => u.toMegabytesFn(v)
    );

    /**
     * Mebibyte (MiB). Binary data unit representing (1,024)^2 bytes
     */
    public static readonly MEBIBYTE: DataUnit = new DataUnit(
        (v) => v * 8.389e6,
        (v) => v * 1.049e6,
        (v) => v * 1048.58,
        (v) => v * 1024,
        (v) => v * 1.04858,
        (v) => v,
        (v) => v * 0.00104858,
        (v) => v / 1024,
        (v, u) => u.toMebibytesFn(v)
    );

    /**
     * Gigabyte (GB). Decimal data unit representing (1,000)^3 bytes
     */
    public static readonly GIGABYTE: DataUnit = new DataUnit(
        (v) => v * 8e9,
        (v) => v * 1e9,
        (v) => v * 1e6,
        (v) => v * 9765632.5,
        (v) => v * 1000,
        (v) => v * 953.674,
        (v) => v,
        (v) => v / 1.073741824,
        (v, u) => u.toGigabytesFn(v)
    );

    /**
     * Gibibyte (GiB). Binary data unit representing (1,024)^3 bytes
     */
    public static readonly GIBIBYTE: DataUnit = new DataUnit(
        (v) => v * (8 * Math.pow(1024, 3)),
        (v) => v * 1073741824,
        (v) => v * 1073741.824,
        (v) => v * 1048576.534774,
        (v) => v * 1073.741824,
        (v) => v * 1024,
        (v) => v * 1.073741824,
        (v) => v,
        (v, u) => u.toGibibytesFn(v)
    );

    private readonly toBitsFn: ToFunction;
    private readonly toBytesFn: ToFunction;
    private readonly toKilobytesFn: ToFunction;
    private readonly toKibibytesFn: ToFunction;
    private readonly toMegabytesFn: ToFunction;
    private readonly toMebibytesFn: ToFunction;
    private readonly toGigabytesFn: ToFunction;
    private readonly toGibibytesFn: ToFunction;
    private readonly convertFn: (val: number, u: DataUnit) => number;

    /**
     * Constructs a new `DataUnit` object. A private constructor is used to prevent external instantiation.
     *
     * @param {ToFunction} toBitsFn bit (b) converter function
     * @param {ToFunction} toBytesFn byte (B) converter function
     * @param {ToFunction} toKilobytesFn kilobyte (kB) converter function
     * @param {ToFunction} toKibibytesFn bibibyte (KiB) converter function
     * @param {ToFunction} toMegabytesFn megabyte (MB) converter function
     * @param {ToFunction} toMebibytesFn mebibyte (MiB) converter function
     * @param {ToFunction} toGigabytesFn gigabyte (GB) converter function
     * @param {ToFunction} toGibibytesFn gibibyte (GiB) converter function
     * @param {any} convertFn data unit converter function
     */
    private constructor(
        toBitsFn: ToFunction,
        toBytesFn: ToFunction,
        toKilobytesFn: ToFunction,
        toKibibytesFn: ToFunction,
        toMegabytesFn: ToFunction,
        toMebibytesFn: ToFunction,
        toGigabytesFn: ToFunction,
        toGibibytesFn: ToFunction,
        convertFn: (val: number, u: DataUnit) => number
    ) {
        this.toBitsFn = toBitsFn;
        this.toBytesFn = toBytesFn;
        this.toKilobytesFn = toKilobytesFn;
        this.toKibibytesFn = toKibibytesFn;
        this.toMegabytesFn = toMegabytesFn;
        this.toMebibytesFn = toMebibytesFn;
        this.toGigabytesFn = toGigabytesFn;
        this.toGibibytesFn = toGibibytesFn;
        this.convertFn = convertFn;
    }

    /**
     * Convert a value in this unit to bits (b)
     *
     * @param {number} val value to convert to bits
     * @returns {number} converted bit value
     */
    public toBits(val: number): number {
        return this.toBitsFn(val);
    }

    /**
     * Convert a value in this unit to bytes (B)
     *
     * @param {number} val value to convert to bytes
     * @returns {number} converted byte value
     */
    public toBytes(val: number): number {
        return this.toBytesFn(val);
    }

    /**
     * Convert a value in this unit to kilobytes (kB)
     *
     * @param {number} val value to convert to kilobytes
     * @returns {number} converted kilobyte value
     */
    public toKilobytes(val: number): number {
        return this.toKilobytesFn(val);
    }

    /**
     * Convert a value in this unit to kibibytes (KiB)
     *
     * @param {number} val value to convert to kibibytes
     * @returns {number} converted kibibyte value
     */
    public toKibibytes(val: number): number {
        return this.toKibibytesFn(val);
    }

    /**
     * Convert a value in this unit to megabytes (MB)
     *
     * @param {number} val value to convert to megabytes
     * @returns {number} converted megabyte value
     */
    public toMegabytes(val: number): number {
        return this.toMegabytesFn(val);
    }

    /**
     * Convert a value in this unit mebibytes (MiB)
     *
     * @param {number} val value to convert to mebibytes
     * @returns {number} converted mebibyte value
     */
    public toMebibytes(val: number): number {
        return this.toMebibytesFn(val);
    }

    /**
     * Convert a value in this unit to gigabytes (GB)
     *
     * @param {number} val value to convert to gigabytes
     * @returns {number} converted gigabyte value
     */
    public toGigabytes(val: number): number {
        return this.toGigabytesFn(val);
    }

    /**
     * Convert a value in this unit to gibibytes (GiB)
     *
     * @param {number} val value to convert to gibibytes
     * @returns {number} converted gibibyte value
     */
    public toGibibytes(val: number): number {
        return this.toGibibytesFn(val);
    }

    /**
     * Converts the value (`val`) in the specified data unit (`unit`) to this unit
     *
     * @param {number} val value to convert
     * @param {DataUnit} unit data unit of `val`
     * @returns {number} converted value in this unit
     */
    public convert(val: number, unit: DataUnit): number {
        return this.convertFn(val, unit);
    }
}
