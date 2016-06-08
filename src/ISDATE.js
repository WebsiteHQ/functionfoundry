// Copyright 2015 Peter W Moresi

// ISDATE returns true when the `value` is a JavaScript date object.
export function isdate(value) {
    return value && Object.prototype.toString.call(value) == '[object Date]';
};
