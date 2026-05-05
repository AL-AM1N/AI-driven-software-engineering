//? Type Assertion

/**
 * !Note:
 * TypeScript-এ Type Assertion হলো এমন একটি প্রক্রিয়া, যার মাধ্যমে আপনি কম্পাইলারকে বলছেন যে একটি নির্দিষ্ট ভ্যালু বা ভেরিয়েবলের টাইপ আপনি জানেন এবং সেটা কি ধরনের (যেমন string, number ইত্যাদি) তা কম্পাইলারকে স্পষ্টভাবে জানাচ্ছেন। এটা টাইপ চেকিং এ সাহায্য করে যখন TypeScript সঠিক টাইপ নির্ধারণ করতে পারে না।
 */
//-------------------------------------------------
const kgToGMConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    const result = input * 1000;
    return `Normal number: ${result}`;
  } else if (typeof input === "string") {
    const [value, taka] = input.split(" ");
    const result = Number(value) * 1000;
    return `String converted to number: ${result}`;
  }
};

const result1 = kgToGMConverter(2) as number; // "as number" is a type assetion, because we define it as number
console.log(result1);

const result2 = kgToGMConverter("2 kg") as string; // "as string" is a type assetion, because we define it as string
console.log(result2);

// ----------------------------------------------------

// type CustomError = {
//     message: string;
// }

// try{
// } catch (err) {
//     console.log( (err as CustomError).message )
// }