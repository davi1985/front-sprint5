export type Breadcrumb = {
  id?: number;
  label: string;
  link: string;
  active: boolean;
};

export type Breadcrumbs = {
  breadcrumbs: Breadcrumb[];
};
