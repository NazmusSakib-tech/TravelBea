import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewPackage.css';

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addSinglePackage', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Successfully added')
                    reset();
                }
                console.log(result)
            }
            )
        console.log(data)
    };

    return (
        <div className="add-package">
            <h2>Add Package</h2>
            <form className="form-custom p-3" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Package Name" required /> <br />
                <input className="mt-2" type="text" {...register("shortdescribe")} placeholder="Shortdescribe" required /> <br />
                <input className="mt-2" type="text" {...register("fulldescribtion")} placeholder="Fulldescribtion" required /> <br />
                <input className="mt-2" type="text" {...register("image")} placeholder="Image-Url" required /> <br />
                <input className="mt-2" type="text" {...register("price")} placeholder="Price" required /> <br />
                <input className="mt-2 btn btn-primary fw-bold" type="submit" value="Add Package" />
            </form>
        </div>
    );
};

export default AddNewPackage;