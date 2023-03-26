export interface User {
  id: string;

  username: string;

  password: string;

  name: string;

  gender: number;

  isAdmin: number;

  birthday: number;

  phoneNum: string;

  homeAddress: string;

  token?: string;
}
