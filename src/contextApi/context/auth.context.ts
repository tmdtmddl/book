// src/contexts/auth.context.ts
import { createContext, useContext } from "react";

export interface User {
  uid: string;
  email: string;
  name: string;
}

// 결과 타입(필요하면 더 확장 가능)
export type PromiseResult<T = unknown> = {
  success?: boolean;
  message?: string;
  data?: T;
};

export interface Context {
  user: User | null;
  initialized: boolean; // onAuthStateChanged 1회 이상 돌았는지
  isPending: boolean; // 로그인/회원가입/로그아웃 등 요청 처리 중인지

  signin: (email: string, password: string) => Promise<PromiseResult<User>>;
  signout: () => Promise<PromiseResult>;
  signup: (newUser: User, password: string) => Promise<PromiseResult<User>>;

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

// 이름은 context 대신 AuthContext로 하는 게 보통 더 명확하지만,
// 너가 원하는 스타일을 유지할게.
export const context = createContext<Context>(initialState);

// use 훅도 예시 그대로 유지
export const use = () => useContext(context);
