//? 2-4 Generics with interface

// Define a generic interface for Developer, which takes two parameters:
// T is for the type of the smartWatch, and X is for the type of the bike (default is null if not provided)


interface Developer<T, X = null> {
  name: string; 
  salary: number;
  device: { 
    brand: string; 
    model: string; 
    releasedYear: number; 
  };
  smartWatch: T; // The smartWatch property uses the generic type T (e.g., AppleWatch, WithoutBrand)

  bike?: X; // The bike property is optional and uses type X (default is null if not provided)
}


interface WithoutBrand {
  heartRate: string; 
  stopWatch: boolean; 
}


interface AppleWatch {
  heartRate: string; 
  callSupport: boolean;
  calculator: boolean; 
  AiFeature: boolean; 
}


const poorDeveloper: Developer<
  WithoutBrand, 
  { brand: "yamaha"; engineCapacity: "200cc" } 
> = {
  name: "Mr. Poor", 
  salary: 20, 
  device: { 
    brand: "lenovo", 
    model: "A21", 
    releasedYear: 2010, 
  },
  smartWatch: { 
    heartRate: "200", 
    stopWatch: true, 
  },
};


const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich", 
  salary: 100, 
  device: {
    brand: "hp", 
    model: "X34", 
    releasedYear: 2050, 
  },
  smartWatch: { 
    heartRate: "200", 
    callSupport: true, 
    calculator: true,
    AiFeature: true, 
  },
  bike: null, // No bike assigned (null value)
};