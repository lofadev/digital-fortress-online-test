interface IMenu {
  title: string;
  to: string;
}

export const menu: IMenu[] = [
  {
    title: 'Dashboard',
    to: '/',
  },
  {
    title: 'Task',
    to: '/task',
  },
  {
    title: 'Projects',
    to: '/projects',
  },
  {
    title: 'Schedule',
    to: '/schedule',
  },
];
