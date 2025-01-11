
import { Bebas_Neue } from 'next/font/google';
import "./style.css";
const bebasneue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
  })
  
export default function Home() {
  return (
      <div className="wel" style={bebasneue.style}>
          <>
            <h1>Welcome to SXC Lost && Found</h1>
            <h2>by <span style={{ color: 'red' }}>Student</span> for <span style={{ color: 'red' }}>Student</span></h2>
        <br />
        <center>
              <h3 className='signw'>
                Please <a href="#" style={{color: 'yellow'}}>signin</a> to continue.
              </h3>
            </center>
          </>
        
      </div>
  );
}
