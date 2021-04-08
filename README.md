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
$ npm install digital-unit-converter --save
```

Using yarn
```console
$ yarn add digital-unit-converter
```

## Import module

CommonJS
```js
const { DataUnit } = require('digital-unit-converter');
```

ES6
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

| DataUnit | Term | Abbreviation | Unit Type | Number of Bytes |
| :--- | :--- | :--- | :--- | :--- |
| BIT | bit | b | - | 0.125 |
| BYTE | byte | B | - | 1 |
| KILOBYTE | kilobyte | kB | Decimal | 10<sup>3</sup> |
| KIBIBYTE | kibibyte | KiB | Binary | 2<sup>10</sup> |
| MEGABYTE | megabyte | MB | Decimal | 10<sup>6</sup> |
| MEBIBYTE | mebibyte | MiB | Binary | 2<sup>20</sup> |
| GIGABYTE | gigabyte | GB | Decimal | 10<sup>9</sup> |
| GIBIBYTE | gibibyte | GiB | Binary | 2<sup>30</sup> |

## Static Members

- [BIT](README.md#bit)
- [BYTE](README.md#byte)
- [GIBIBYTE](README.md#gibibyte)
- [GIGABYTE](README.md#gigabyte)
- [KIBIBYTE](README.md#kibibyte)
- [KILOBYTE](README.md#kilobyte)
- [MEBIBYTE](README.md#mebibyte)
- [MEGABYTE](README.md#megabyte)

### BIT

▪ `Static` `Readonly` **BIT**: *DataUnit*

Bit (b). Data unit representing a binary digit

Defined in: [index.ts:10](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L10)

___

### BYTE

▪ `Static` `Readonly` **BYTE**: *DataUnit*

Byte (B). Data unit representing 8 bits

Defined in: [index.ts:25](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L25)

___

### GIBIBYTE

▪ `Static` `Readonly` **GIBIBYTE**: *DataUnit*

Gibibyte (GiB). Binary data unit representing 1,024<sup>3</sup> bytes

Defined in: [index.ts:115](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L115)

___

### GIGABYTE

▪ `Static` `Readonly` **GIGABYTE**: *DataUnit*

Gigabyte (GB). Decimal data unit representing 1,000<sup>3</sup> bytes

Defined in: [index.ts:100](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L100)

___

### KIBIBYTE

▪ `Static` `Readonly` **KIBIBYTE**: *DataUnit*

Kibibyte (KiB). Binary data unit representing 1,024 bytes

Defined in: [index.ts:55](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L55)

___

### KILOBYTE

▪ `Static` `Readonly` **KILOBYTE**: *DataUnit*

Kilobyte (kB). Decimal data unit representing 1,000 bytes

Defined in: [index.ts:40](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L40)

___

### MEBIBYTE

▪ `Static` `Readonly` **MEBIBYTE**: *DataUnit*

Mebibyte (MiB). Binary data unit representing 1,024<sup>2</sup> bytes

Defined in: [index.ts:85](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L85)

___

### MEGABYTE

▪ `Static` `Readonly` **MEGABYTE**: *DataUnit*

Megabyte (MB). Decimal data unit representing 1,000<sup>2</sup> bytes

Defined in: [index.ts:70](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L70)

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

Defined in: [index.ts:259](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L259)

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

Defined in: [index.ts:178](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L178)

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

Defined in: [index.ts:188](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L188)

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

Defined in: [index.ts:248](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L248)

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

Defined in: [index.ts:238](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L238)

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

Defined in: [index.ts:208](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L208)

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

Defined in: [index.ts:198](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L198)

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

Defined in: [index.ts:228](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L228)

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

Defined in: [index.ts:218](https://github.com/zduclos/digital-unit-converter/blob/develop/src/index.ts#L218)
