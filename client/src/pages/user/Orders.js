import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Orders = () => {
    return (
        <Layout title={"Dashboard - Orders"}>
            <div className='container-fluid m-4 p-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>orders</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Orders