# digital-unit-converter
 Utility to simplify conversion of digital units of measurement

- [Digital Unit Converter](#digital-unit-converter)
  - [Installation](#installation)
  - [Importing](#import-module)
  - [Examples](#examples)
  - [Supported Data Units](#supported-data-units)
  - [Static Members](#static-members)
  - [Methods](#methods)

## Installation

Using npm
```console
$ npm install digital-unit-converter
```

Using yarn
```console
$ yarn add digital-unit-converter
```

## Import module

The package provides native CommonJS and ES Module builds

```js
const { DataUnit } = require('digital-unit-converter');
```

```ts
import { DataUnit } from 'digital-unit-converter';
```

## Examples

JavaScript: convert 10 megabytes (MB) to bytes (B)
```js
let converted = DataUnit.MEGABYTE.toBytes(10);
console.log(converted); // 10000000

// or use convert() instead
converted = DataUnit.BYTE.convert(10, DataUnit.MEGABYTE);
console.log(converted); // 10000000
```

TypeScript: convert 1 gibibyte (GiB) to mebibytes (MiB)
```ts
let converted: number = DataUnit.GIBIBYTE.toMebibytes(1);
console.log(converted); // 1024

// or use convert() instead
converted = DataUnit.MEBIBYTE.convert(1, DataUnit.GIBIBYTE);
console.log(converted); // 1024
```

## Supported Data Units

The following data units are currently supported.

| DataUnit | Term     | Abbreviation | Unit Type | Number of Bytes |
|:---------|:---------|:-------------|:----------|:----------------|
| BIT      | bit      | b            | -         | 0.125           |
| BYTE     | byte     | B            | -         | 1               |
| KILOBYTE | kilobyte | kB           | Decimal   | 10<sup>3</sup>  |
| KIBIBYTE | kibibyte | KiB          | Binary    | 2<sup>10</sup>  |
| MEGABYTE | megabyte | MB           | Decimal   | 10<sup>6</sup>  |
| MEBIBYTE | mebibyte | MiB          | Binary    | 2<sup>20</sup>  |
| GIGABYTE | gigabyte | GB           | Decimal   | 10<sup>9</sup>  |
| GIBIBYTE | gibibyte | GiB          | Binary    | 2<sup>30</sup>  |
| TERABYTE | terabyte | TB           | Decimal   | 10<sup>12</sup> |
| TEBIBYTE | tebibyte | TiB          | Binary    | 2<sup>40</sup>  |

## Static Members

- [BIT](README.md#bit)
- [BYTE](README.md#byte)
- [GIBIBYTE](README.md#gibibyte)
- [GIGABYTE](README.md#gigabyte)
- [KIBIBYTE](README.md#kibibyte)
- [KILOBYTE](README.md#kilobyte)
- [MEBIBYTE](README.md#mebibyte)
- [MEGABYTE](README.md#megabyte)
- [TEBIBYTE](README.md#tebibyte)
- [TERABYTE](README.md#terabyte)

### BIT

▪ `Static` `Readonly` **BIT**: *DataUnit*

Bit (b). Data unit representing a binary digit

Defined in: [index.ts:8](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L8)

___

### BYTE

▪ `Static` `Readonly` **BYTE**: *DataUnit*

Byte (B). Data unit representing 8 bits

Defined in: [index.ts:13](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L13)

___

### GIBIBYTE

▪ `Static` `Readonly` **GIBIBYTE**: *DataUnit*

Gibibyte (GiB). Binary data unit representing 1,024<sup>3</sup> bytes

Defined in: [index.ts:43](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L43)

___

### GIGABYTE

▪ `Static` `Readonly` **GIGABYTE**: *DataUnit*

Gigabyte (GB). Decimal data unit representing 1,000<sup>3</sup> bytes

Defined in: [index.ts:38](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L38)

___

### KIBIBYTE

▪ `Static` `Readonly` **KIBIBYTE**: *DataUnit*

Kibibyte (KiB). Binary data unit representing 1,024 bytes

Defined in: [index.ts:23](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L23)

___

### KILOBYTE

▪ `Static` `Readonly` **KILOBYTE**: *DataUnit*

Kilobyte (kB). Decimal data unit representing 1,000 bytes

Defined in: [index.ts:18](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L18)

___

### MEBIBYTE

▪ `Static` `Readonly` **MEBIBYTE**: *DataUnit*

Mebibyte (MiB). Binary data unit representing 1,024<sup>2</sup> bytes

Defined in: [index.ts:33](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L33)

___

### MEGABYTE

▪ `Static` `Readonly` **MEGABYTE**: *DataUnit*

Megabyte (MB). Decimal data unit representing 1,000<sup>2</sup> bytes

Defined in: [index.ts:28](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L28)

___

### TEBIBYTE

▪ `Static` `Readonly` **TEBIBYTE**: *DataUnit*

Tebibyte (TiB). Binary data unit representing 1,024<sup>4</sup> bytes

Defined in: [index.ts:48](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L48)

___

### TERABYTE

▪ `Static` `Readonly` **TERABYTE**: *DataUnit*

Terabyte (TB). Decimal data unit representing 1,000<sup>4</sup> bytes

Defined in: [index.ts:46](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L46)

## Methods

- [convert](README.md#convert)
- [toBits](README.md#tobits)
- [toBytes](README.md#tobytes)
- [toGibibytes](README.md#togibibytes)
- [toGigabytes](README.md#togigabytes)
- [toKibibytes](README.md#tokibibytes)
- [toKilobytes](README.md#tokilobytes)
- [toMebibytes](README.md#tomebibytes)
- [toMegabytes](README.md#tomegabytes)
- [toTebibytes](README.md#totebibytes)
- [toTerabytes](README.md#toterabytes)

### convert

▸ **convert**(`val`: *number*, `unit`: *DataUnit*): *number*

Converts the value (`val`) in the specified data unit (`unit`) to this unit

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert   |
`unit` | *DataUnit* | data unit of `val`   |

**Returns:** *number*

converted value in this unit

Defined in: [index.ts:67](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L67)

___

### toBits

▸ **toBits**(`val`: *number*): *number*

Convert a value in this unit to bits (b)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to bits   |

**Returns:** *number*

converted bit value

Defined in: [index.ts:77](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L77)

___

### toBytes

▸ **toBytes**(`val`: *number*): *number*

Convert a value in this unit to bytes (B)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to bytes   |

**Returns:** *number*

converted byte value

Defined in: [index.ts:87](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L87)

___

### toGibibytes

▸ **toGibibytes**(`val`: *number*): *number*

Convert a value in this unit to gibibytes (GiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to gibibytes   |

**Returns:** *number*

converted gibibyte value

Defined in: [index.ts:147](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L147)

___

### toGigabytes

▸ **toGigabytes**(`val`: *number*): *number*

Convert a value in this unit to gigabytes (GB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to gigabytes   |

**Returns:** *number*

converted gigabyte value

Defined in: [index.ts:137](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L137)

___

### toKibibytes

▸ **toKibibytes**(`val`: *number*): *number*

Convert a value in this unit to kibibytes (KiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to kibibytes   |

**Returns:** *number*

converted kibibyte value

Defined in: [index.ts:107](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L107)

___

### toKilobytes

▸ **toKilobytes**(`val`: *number*): *number*

Convert a value in this unit to kilobytes (kB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to kilobytes   |

**Returns:** *number*

converted kilobyte value

Defined in: [index.ts:97](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L97)

___

### toMebibytes

▸ **toMebibytes**(`val`: *number*): *number*

Convert a value in this unit mebibytes (MiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to mebibytes   |

**Returns:** *number*

converted mebibyte value

Defined in: [index.ts:127](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L127)

___

### toMegabytes

▸ **toMegabytes**(`val`: *number*): *number*

Convert a value in this unit to megabytes (MB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to megabytes   |

**Returns:** *number*

converted megabyte value

Defined in: [index.ts:117](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L117)

### toTebibytes

▸ **toTebibytes**(`val`: *number*): *number*

Convert a value in this unit to tebibytes (TiB)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *number* | value to convert to tebibytes   |

**Returns:** *number*

converted tebibyte value

Defined in: [index.ts:167](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L167)

___

### toTerabytes

▸ **toTerabytes**(`val`: *number*): *number*

Convert a value in this unit to terabytes (TB)

#### Parameters:

Name | Type | Description                   |
:------ | :------ |:------------------------------|
`val` | *number* | value to convert to terabytes |

**Returns:** *number*

converted terabyte value

Defined in: [index.ts:157](https://github.com/zduclos/digital-unit-converter/blob/master/src/index.ts#L157)

___

## Development
Node.js 22 or newer is supported.

```shell
npm install
npm run check