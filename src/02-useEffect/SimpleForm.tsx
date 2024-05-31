import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'nemezi',
    email: 'leamunoz@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };


  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);


  return (
    <>
      <h1>SimpleForm</h1>
      <hr className="my-3" />

      <input
        type="text"
        className="form-control mx-2"
        name="username"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control m-2"
        name="email"
        placeholder="User Email"
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'nemezia' && <Message />
      }
    </>
  )
}
