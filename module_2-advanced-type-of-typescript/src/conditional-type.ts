// conditional type :  je type condition er upor nirvorsheel

type A = null;
type B = undefined;

type C = A extends null ? true : false; // output: true (because eita check korbe: A = null → null কি null-এর সাথে মিলে? , ans: yes)

type D = A extends null ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = CheckVehicle<"tractor">; // false

type HasBike1 = CheckVehicle<"bike">; // true


