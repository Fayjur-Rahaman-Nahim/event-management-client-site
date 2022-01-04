import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackeges = () => {

    const { register, handleSubmit, reset } = useForm();
    const userInfo = window.localStorage.getItem('userInfo') && JSON.parse(window.localStorage.getItem('userInfo'));
    const onSubmit = data => {
        console.log(data);
        data.email = userInfo.email;
        fetch('https://sleepy-stream-15565.herokuapp.com/api/package/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${userInfo.token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    alert('data inserted successfully');
                    reset();
                }
                console.log(data);
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> */}
                <TextField sx={{ m: 2, width: '75%' }} id="standard-basic" label="package_name" {...register("package_name")} variant="standard" required /> <br />
                <TextField sx={{ m: 2, width: '75%' }} id="standard-basic" label="image-link" {...register("image_link")} variant="standard" required /> <br />
                <TextField sx={{ m: 2, width: '75%' }} id="standard-basic" label="description" {...register("description")} variant="standard" required /> <br />
                <TextField sx={{ m: 2, width: '75%' }} id="standard-basic" label="price" {...register("price")} variant="standard" required /> <br />
                {/* <label style={{}}>categories</label><br /> */}
                <select required style={{ width: '75%', height: '30px' }} {...register("categories")}>
                    <option value="photography">photography</option>
                    <option value="catering">catering</option>
                    <option value="flower">flower</option>
                    <option value="lighting">lighting</option>

                </select> <br />


                <Button sx={{ m: 2 }} type='submit' variant="contained">Submit</Button>
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
};

export default AddPackeges;