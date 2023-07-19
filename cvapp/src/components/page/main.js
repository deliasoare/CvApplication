import Form from '../form/form';
import StartPage from '../startPage/main';
import Preview from '../previewPage/index';
import { useState } from 'react';

export default function Main({info, setInfo}) {
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
            formPageActive === true ?
            <Form setInfo={setInfo} activatePreviewPage={activatePreviewPage} />
            : 
            <Preview info={info} />
         }
        </div>
    )
    
}