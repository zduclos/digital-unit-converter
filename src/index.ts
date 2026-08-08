/**
 * Utility to convert units of digital information across units.
 */
export class DataUnit {
    /**
     * Bit (b). Data unit representing a binary digit
     */
    public static readonly BIT = new DataUnit(1 / 8);

    /**
     * Byte (B). Data unit representing 8 bits
     */
    public static readonly BYTE = new DataUnit(1);

    /**
     * Kilobyte (kB). Decimal data unit representing 1,000 bytes
     */
    public static readonly KILOBYTE = new DataUnit(1_000);

    /**
     * Kibibyte (KiB). Binary data unit representing 1,024 bytes
     */
    public static readonly KIBIBYTE = new DataUnit(1_024);

    /**
     * Megabyte (MB). Decimal data unit representing (1,000)^2 bytes
     */
    public static readonly MEGABYTE = new DataUnit(1_000 ** 2);

    /**
     * Mebibyte (MiB). Binary data unit representing (1,024)^2 bytes
     */
    public static readonly MEBIBYTE = new DataUnit(1_024 ** 2);

    /**
     * Gigabyte (GB). Decimal data unit representing (1,000)^3 bytes
     */
    public static readonly GIGABYTE = new DataUnit(1_000 ** 3);

    /**
     * Gibibyte (GiB). Binary data unit representing (1,024)^3 bytes
     */
    public static readonly GIBIBYTE = new DataUnit(1_024 ** 3);

    /**
     * Terabyte (TB). Decimal data unit representing (1,000)^4 bytes
     */
    public static readonly TERABYTE = new DataUnit(1_000 ** 4);

    /**
     * Tibibyte (TiB). Binary data unit representing (1,024)^4 bytes
     */
    public static readonly TEBIBYTE = new DataUnit(1_024 ** 4);

    /**
     * Constructs a new `DataUnit` object. A private constructor is used to prevent external instantiation.
     */
    private constructor(private readonly bytesPerUnit: number) {}

    /**
     * Converts the value (`val`) in the specified data unit (`unit`) to this unit
     *
     * @param {number} val value to convert
     * @param {DataUnit} unit data unit of `val`
     * @returns {number} converted value in this unit
     */
    public convert(val: number, unit: DataUnit): number {
        return (val * unit.bytesPerUnit) / this.bytesPerUnit;
    }

    /**
     * Convert a value in this unit to bits (b)
     *
     * @param {number} val value to convert to bits
     * @returns {number} converted bit value
     */
    public toBits(val: number): number {
        return DataUnit.BIT.convert(val, this);
    }

    /**
     * Convert a value in this unit to bytes (B)
     *
     * @param {number} val value to convert to bytes
     * @returns {number} converted byte value
     */
    public toBytes(val: number): number {
        return DataUnit.BYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to kilobytes (kB)
     *
     * @param {number} val value to convert to kilobytes
     * @returns {number} converted kilobyte value
     */
    public toKilobytes(val: number): number {
        return DataUnit.KILOBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to kibibytes (KiB)
     *
     * @param {number} val value to convert to kibibytes
     * @returns {number} converted kibibyte value
     */
    public toKibibytes(val: number): number {
        return DataUnit.KIBIBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to megabytes (MB)
     *
     * @param {number} val value to convert to megabytes
     * @returns {number} converted megabyte value
     */
    public toMegabytes(val: number): number {
        return DataUnit.MEGABYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit mebibytes (MiB)
     *
     * @param {number} val value to convert to mebibytes
     * @returns {number} converted mebibyte value
     */
    public toMebibytes(val: number): number {
        return DataUnit.MEBIBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to gigabytes (GB)
     *
     * @param {number} val value to convert to gigabytes
     * @returns {number} converted gigabyte value
     */
    public toGigabytes(val: number): number {
        return DataUnit.GIGABYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to gibibytes (GiB)
     *
     * @param {number} val value to convert to gibibytes
     * @returns {number} converted gibibyte value
     */
    public toGibibytes(val: number): number {
        return DataUnit.GIBIBYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to terabytes (TB)
     *
     * @param {number} val value to convert to terabytes
     * @returns {number} converted terabyte value
     */
    public toTerabytes(val: number): number {
        return DataUnit.TERABYTE.convert(val, this);
    }

    /**
     * Convert a value in this unit to tebibytes (TiB)
     *
     * @param {number} val value to convert to tebibytes
     * @returns {number} converted tebibyte value
     */
    public toTebibytes(val: number): number {
        return DataUnit.TEBIBYTE.convert(val, this);
    }
}
