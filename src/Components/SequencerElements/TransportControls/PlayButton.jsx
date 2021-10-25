
import startSequences from "../../../Functions/startSequences";
import * as Tone from 'tone'
import { useIsMount } from "../../../Functions/useIsMount";


const PlayButton = ({ sequencesList, dummy, setDummy }) => {
 
  
let isMount = useIsMount();

  const resumeContext = async () => {
    await Tone.start();
    Tone.Transport.stop();

    sequencesList.forEach((seq, index) => {
      seq.stop();
    });
    

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

  }



  const handleContextResumeClick = () => {
    if (isMount){
      console.log("first render");
      resumeContext();
    }
      
    else {console.log("subsequent renders");}

    
  };



  return (
    <div className="play-button-cont">
      <button
        className="start-context"
        onMouseDown={handleContextResumeClick}
        onMouseUp={() => startSequences(sequencesList) }
      ></button>
    </div>
  );
};

export default PlayButton;
