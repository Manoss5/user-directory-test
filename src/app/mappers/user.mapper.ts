import { User, UserResponse } from '../models/user.model';

export const userMapper = (raw: UserResponse): User => {
  return {
    id: raw.login.uuid,
    email: raw.email,
    fullName: raw.name.first + ' ' + raw.name.last,
    phone: raw.phone,
    picture: raw.picture,
    location:
      raw.location.street.name +
      ' ' +
      raw.location.street.number +
      ', ' +
      raw.location.country +
      ', ' +
      raw.location.city,
    age: raw.dob.age,
  };
};
