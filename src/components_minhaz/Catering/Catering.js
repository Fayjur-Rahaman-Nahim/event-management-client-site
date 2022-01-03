import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const Catering = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input {...register("firstName")} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> */}
                <TextField sx={{ m: 2, width: '75%' }} id="standard-basic" label="email" {...register("firstName")} variant="standard" /> <br />
                <Button sx={{ m: 2 }} type='submit' variant="contained">Submit</Button>
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
};

export default Catering;