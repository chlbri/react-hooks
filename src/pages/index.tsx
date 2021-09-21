import {FC} from 'react';
import {useBlink} from '../hooks/useBlink';
import { useConsole } from '../hooks/useConsole';
import { useResize } from '../hooks/useResize';

const Blinker: FC = () => {
  const opacity = useBlink();
  return (
    <div className="rounded-full w-3 h-3 bg-red-600" style={{opacity}} />
  );
};
const Blinker2: FC = () => {
  const opacity = useBlink();
  return (
    <div className="rounded-full w-40 h-40 bg-red-600" style={{opacity}} />
  );
};

const Resize1:FC =() =>{
  const width = useResize();
return (
  <div className="bg-yellow-400 h-32" style={{width}} />
)
}

const Console :FC =() =>{
  useConsole();
  return (
    <div>ok</div>
    
  )
}

function About(): JSX.Element {
  return (
    <div className="m-3 h-screen w-full flex items-center justify-center space-x-10">
      {/* <Blinker />
      <Blinker2 />
      <Resize1/> */}
      {/* <Console/> */}

    </div>
  );
}

export default About;
