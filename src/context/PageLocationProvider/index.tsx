// Imports for ceating context
import { createContext, useContext, useEffect } from "react";
// Imports for ceating context provider
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

// Creating a private context
interface PageLocationContextType {
  pathName: string;
}

const PageLocationContext = createContext<PageLocationContextType | null>(null);

// Creating a public
export const usePageLocation = () => {
  const context = useContext(PageLocationContext);
  if (!context) {
    throw new Error(
      "usePageLocation must be used within a PageLocationProvider"
    );
  }
  return context;
};

// Creating a Public provider
interface Props {
  children: ReactNode;
}

export default function PageLocationProvider({ children }: Props) {
  var pathName = useLocation().pathname;

  return (
    <PageLocationContext.Provider value={{ pathName }}>
      {children}
    </PageLocationContext.Provider>
  );
}
