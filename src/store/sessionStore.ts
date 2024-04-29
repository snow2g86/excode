import { create } from "zustand";
import { z } from 'zod';


const SessionObj = z.object({
  userId :  z.optional(z.string()),
  loginTime : z.optional(z.date()),
  setUser : z.function().args( z.object({
    userId : z.string(),
    loginTime : z.date(),
  })),
  logout: z.function(),
});

type SessionStoreType = z.infer<typeof SessionObj>;

const SessionStore = create<SessionStoreType>((set) => ({
  userId: undefined,
  loginTime: undefined,
  setUser: (obj) => set(obj),
  logout: () => set({ 
    userId: undefined,
    loginTime:  undefined
  }),
}));

export default SessionStore;