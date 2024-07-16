import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';


export function Test () {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
    const [result, setResult] = useState(null);
    const onSubmit = async (data) => {
        try {
          const response = await axios.post('/api/screen', data);
          setResult(response.data);
        } catch (error) {
          console.error('Error:', error);
          setResult({ error: 'An error occurred while screening' });
        }
      }
      return (
        <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>Name</label>
              <input type="text" name="name"
               {...register('name', { required: 'Name is required' })}/>
               {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="form-control">
              <label>Year</label>
              <input type="text" name="year" 
              {...register('year', { required: 'Year is required' })} />
              {errors.year && <span>{errors.year.message}</span>}
            </div>
            <div className="form-control">
              <label>Country</label>
              <input type="text" name="country" 
              {...register('country', { required: 'Country is required' })} />
              {errors.country && <span>{errors.country.message}</span>}
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">Submit</button>
            </div>
          </form>
          {result && (
            <div>
            <h2>{result.hit ? 'Hit' : 'Clear'}</h2>
            <p>
              Name: {result.matches.name ? '✅' : '❌'} DoB:{' '}
              {result.matches.year ? '✅' : '❌'} Country:{' '}
              {result.matches.country ? '✅' : '❌'}
            </p>
            </div>
      )}
        </div>
      );
};
