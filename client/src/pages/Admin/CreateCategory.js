import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import Toaster from 'react-hot-toast'
import axios from 'axios'
import CategoryForm from '../../components/Form/CategoryForm'


const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");

    // handle submit form
    const handleSubmit = async () => {
        try {
            const { data } = await axios.post('/api/v1/category/create-category', { name });
            if (data?.success) {
                Toaster.success(`${data.name} is created`); // Use the correct property for the created category
                getAllCategory();
            } else {
                Toaster.error(data?.message || "Error creating category"); // Check if data exists before accessing its properties
            }
        } catch (error) {
            console.error(error);
            Toaster.error("Something went wrong in the input form");
        }
    };
    

    // feth all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data.success) {
                setCategories(data.category);
            }
        } catch (error) {
            console.log(error);
            Toaster.error("Something went wrong in getting catgeory");
        }
    }; 

    useEffect(() => {
        getAllCategory();
    }, []);

    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className='container-fluid m-4 p-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Manage Category</h1>
                        <div className='p-3 w-50'>
                            <CategoryForm 
                            handleSubmit={handleSubmit} 
                            value={name} 
                            setValue={setName} 
                            />
                        </div>
                        <div className='w-75'>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c) => (
                                        <tr key={c._id}>
                                            <td>{c.name}</td>
                                            <td><button className='btn btn-primary '>Edit</button></td>
                                            <td><button className='btn btn-danger ms-3'>Delete</button></td>                                          

                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory