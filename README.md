# array.stride

Implement and method for javascript arrays to merge arrays.

## Installation

    npm install array.stride

## Usage

Simply require this module. Unlike most node modules, array.and doesn't export anything.
Instead it modifies the `Array` prototype to implement a new method: `.and()`.

## Syntax

	arr.and(array[,array, ...])

### Parameters

- `array` : Array to merge with this array. Multiple arrays can be passed to be
  merged.
  
## Description

`Array.prototype.and()` merges the current array with other arrays returning the
merged array. All the arrays are iterated together and the elements are inserted
into the returned array in the order they are defined: this array, then the first
argument, then the second argument (if any) etc.

If some array is shorter than others then its element will be inserted into the
returned array as `undefined` when it runs out of elements.

## Examples

### Example: Merging two arrays

The following example merges two arrays:

    var x = [1,2,3].and([4,5,6]);
	
	// x is now:
	[1,4,2,5,3,6]


### Example: Merging three arrays

The following example merges three arrays of different sizes:

	var x = [1,2,3].and([4,5],[6]);
	
	// x is now:
	[1,4,6,2,5,undefined,3,undefined,undefined]


