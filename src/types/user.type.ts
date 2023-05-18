type UserType = 'admin' | 'user' | 'service' | 'read_only';

export type PostUser = {
  customer: string; // UUID
  name: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // Format: "+[country code][phone number]"
  type: UserType;
};

export type LoginCredentials = {
  name: string;
  password: string;
};
