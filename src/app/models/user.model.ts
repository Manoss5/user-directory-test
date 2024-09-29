export type UserResponse = {
  email: string;
  name: { first: string; last: string };
  phone: string;
  picture: { thumbnail: string; large: string };
  location: {
    street: { number: number; name: string };
    city: string;
    country: string;
  };
  dob: { age: number };
  login: { uuid: string };
};

export type User = {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  picture: { thumbnail: string; large: string };
  location: string;
  age: number;
};
