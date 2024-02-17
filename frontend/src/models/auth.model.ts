export type AuthUserType = {
   authUser: AuthUserInterface | null;
   setAuthUser: React.Dispatch<React.SetStateAction<AuthUserInterface | null>>;
};

export interface AuthUserInterface {
  _id: string;
  fullname: string;
  username: string;
  profilePic: string
}

export interface SignupData {
   fullname: string;
   username: string;
   password: string;
   confirmPassword: string;
   gender: string;
 }

 export interface LoginData {
   username: string;
   password: string;
 }