import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const UserProfile = () => {
    return (
        <Layout title={"Dashboard - Your Profile"}>
            <div className='container-fluid m-4 p-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>profile</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserProfile