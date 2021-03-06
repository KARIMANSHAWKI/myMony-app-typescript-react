import { useState, FC } from 'react'
import { useSignup } from '../../hooks/useSignup';

// styles
import  './signup.css';

const Signup: FC = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const {signup, error, isPending} = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signup({email, password, displayName})
  }

  return (
    <form onSubmit={handleSubmit} className={'signup-form'}>
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending &&  <button className="btn">Sign up</button>}
      {isPending &&  <button className="btn" disabled>loading</button>}
     
    </form>
  )
}

export default Signup;