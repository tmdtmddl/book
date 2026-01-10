// src/contexts/auth.context.ts
import { createContext, useContext } from "react";

// export interface User {
//   uid: string;
//   email: string;
//   name: string;
// }

// // 결과 타입(필요하면 더 확장 가능)
// export type PromiseResult<T = unknown> = {
//   success?: boolean;
//   message?: string;
//   data?: T;
// };

export interface Context {
  user: User | null;
  initialized: boolean; // onAuthStateChanged 1회 이상 돌았는지
  isPending: boolean; // 로그인/회원가입/로그아웃 등 요청 처리 중인지

  signin: (email: string, password: string) => Promise<PromiseResult>;
  signout: () => Promise<PromiseResult>;
  signup: (newUser: User, password: string) => Promise<PromiseResult>;

  updateUser: (target: keyof User, value: any) => void;
}

export const initialState: Context = {
  user: null,
  initialized: false,
  isPending: false,

  signin: async () => ({}),
  signout: async () => ({}),
  signup: async () => ({}),

  updateUser: () => {},
};

export const context = createContext<Context>(initialState);

export const use = () => useContext(context);
