import React from 'react';
import { useForm } from 'react-hook-form';

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
        <div>
            <h2>Add Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" /> <br />
                <input type="text" {...register("shortdescribe")} placeholder="shortdescribe" /> <br />
                <input type="text" {...register("fulldescribtion")} placeholder="fulldescribtion" /> <br />
                <input type="text" {...register("image")} placeholder="image url" /> <br />
                <input type="text" {...register("price")} placeholder="price" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewPackage;