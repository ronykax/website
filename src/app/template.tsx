import { type ReactNode, ViewTransition } from "react";
import { tabTransition } from "./tab-transition";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition default="none" enter={tabTransition} exit={tabTransition}>
      {children}
    </ViewTransition>
  );
}
