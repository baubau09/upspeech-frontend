import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { username } = useContext(UserContext);

  return username ? props.children : props.fallback || <div className='d-flex justify-content-center'><Link href="/login"><button type="button" className="btn btn-outline-primary me-2">Sign in</button></Link></div>;
}