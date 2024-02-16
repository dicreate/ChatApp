export type AuthUserType = {
   authUser: string | null;
   setAuthUser: React.Dispatch<React.SetStateAction<string | null>>;
};

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