import TableDashBoard from './components/table';
import { TitleStyled } from './styled';

const Dashboard = () => {
  return (
    <div>
      <TitleStyled>Dashboard</TitleStyled>
      <TableDashBoard />
    </div>
  );
};

export default Dashboard;
