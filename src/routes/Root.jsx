import { Outlet } from 'react-router-dom';
import Layout from '../Components/layout/Layout';

export default function Root() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
