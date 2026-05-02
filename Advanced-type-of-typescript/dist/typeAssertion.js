"use strict";
//? Type Assertion
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * !Note:
 * TypeScript-এ Type Assertion হলো এমন একটি প্রক্রিয়া, যার মাধ্যমে আপনি কম্পাইলারকে বলছেন যে একটি নির্দিষ্ট ভ্যালু বা ভেরিয়েবলের টাইপ আপনি জানেন এবং সেটা কি ধরনের (যেমন string, number ইত্যাদি) তা কম্পাইলারকে স্পষ্টভাবে জানাচ্ছেন। এটা টাইপ চেকিং এ সাহায্য করে যখন TypeScript সঠিক টাইপ নির্ধারণ করতে পারে না।
 */
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return console.log("Normal number: ", input * 1000);
    }
    else if (typeof input === "string") {
        const [value, taka] = input.split(" ");
        const result = Number(value) * 1000;
        return console.log(`String converted to number: ${result}`);
    }
};
kgToGMConverter(2);
//# sourceMappingURL=typeAssertion.js.map