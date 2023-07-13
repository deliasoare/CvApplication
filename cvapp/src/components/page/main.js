import Form from '../form/form';
import StartPage from '../startPage/main';
import { useState } from 'react';

export default function Main(setInfo) {
    const [startPageActive, setStartPageActive] = useState(true);
    const [formPageActive, setFormPageActive] = useState(false);
    const [previewPageActive, setPreviewPageActive] = useState(false);

    const activateFormPage = () => {
        setFormPageActive(true);
        setStartPageActive(false);
    }
    const activatePreviewPage = () => {
        setPreviewPageActive(true);
        setFormPageActive(false);
    }

    return (
        <div className="main">
           {startPageActive === true ? 
            <StartPage onButtonClick={activateFormPage}/>
            :
            formPageActive === true &&
            <Form info={setInfo} activatePreviewPage={activatePreviewPage} />
         }
        </div>
    )
    
}