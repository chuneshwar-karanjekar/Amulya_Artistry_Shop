import React from 'react'
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';

export const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Amulya Artistry Shop"}>
      <div className='container-fluid m-4 p-4'>
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />
          </div>
          <div className='col-md-9'>
            <div className='card w-75 p-3'>
              <h3>user name: {auth?.user?.name}</h3>
              <h3>user email: {auth?.user?.email}</h3>
              <h3>user address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

