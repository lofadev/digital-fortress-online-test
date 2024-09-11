export type TRoute = {
  path: string;
  component: () => JSX.Element;
  layout?: FC<{ children?: ReactNode }>;
};
