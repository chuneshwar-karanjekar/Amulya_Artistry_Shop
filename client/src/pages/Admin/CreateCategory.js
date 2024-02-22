import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import Toaster from 'react-hot-toast'
import axios from 'axios'
import CategoryForm from '../../components/Form/CategoryForm'
import { Modal } from 'antd';


const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState(null);
    const [updateName, setUpdateName] = useState("");


    // handle submit form create category
    const handleSubmit = async () => {
        try {
            const { data } = await axios.post('/api/v1/category/create-category', { name });
            if (data?.success) {
                Toaster.success("category Created !!"); // Use the correct property for the created category
                getAllCategory();
            } else {
                Toaster.error(data?.message || "Error creating category"); // Check if data exists before accessing its properties
            }
        } catch (error) {
            console.error(error);
            Toaster.error("Something went wrong in the input form");
        }
    };


    // get all categories
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

    // handle Update category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/category/update-category/${select._id}`, { name: updateName });
            if (data.success) {
                Toaster.success("Category Updated !!");
                setSelect(null);
                setUpdateName("");
                setVisible(false); // Close the modal
                getAllCategory();
            } else {
                Toaster.error(data.message);
            }
        } catch (error) {
            Toaster.error("Something went wrong..");
        }
    };
    
        // handle Delete category
    const handleDelete = async (id) => {
       
        try {
            const { data } = await axios.delete(`/api/v1/category/delete-category/${id}`);
            if (data.success) {
                Toaster.success("Category Delete");
                getAllCategory();
            } else {
                Toaster.error(data.message);
            }
        } catch (error) {
            Toaster.error("Something went wrong..");
        }
    };

    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className='container-fluid m-4 p-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h2>Manage Category</h2>
                        <div className='p-3 w-50'>
                            {/* call Form here and pass props value to component */}
                            <CategoryForm
                                handleSubmit={handleSubmit}
                                Value={name}
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
                                        <tr >
                                            <td key={c._id}>{c.name}</td>
                                            <button className='btn btn-primary m-1 ' 
                                            onClick={() => {
                                                setVisible(true);
                                                setUpdateName(c.name);
                                                setSelect(c);
                                            }} 
                                            
                                            >Edit</button>
                                            <button className='btn btn-danger m-1'
                                            onClick={()=>{
                                                handleDelete(c._id)
                                            }}
                                            >Delete</button>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
                            <CategoryForm  
                            value={updateName} 
                            setValue={setUpdateName} handleSubmit={handleUpdate}/>
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory;