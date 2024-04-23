import React, {useState, useRef, useEffect, MutableRefObject} from 'react';
import './accordion.scss'

export interface Panel {
    id: number,
    question: string,
    answer: string,
}

interface Props {
    panels: Panel[]
}

interface PanelProps {
    question: string,
    answer: string,
    activeTab: number,
    index: number,
    activateTab: (index: number) => any

}

export const Accordion: React.FC<Props> = ({panels}) => {
    const [activeTab, setActiveTab] = useState<number>(0)

    const activateTab = (index: any) => {
        activeTab === index ? setActiveTab(-1) : setActiveTab(index)
    }

    return (
        <div className='accordion'>
            {panels.map(({id, question, answer}, index) =>
                <AccordionPanel
                    key={id}
                    activeTab={activeTab}
                    index={index}
                    question={question}
                    answer={answer}
                    activateTab={activateTab}
                />
            )}
        </div>
    );
}


const AccordionPanel: React.FC<PanelProps> = ({question, answer, activeTab, index, activateTab}) => {

    const bodyRef = useRef() as MutableRefObject<HTMLDivElement>;

    const [height, setHeight] = useState<number>(0);

    const isActive = activeTab === index;

    useEffect(() => {
        setHeight(bodyRef.current.scrollHeight)
    }, [isActive])

    return (
        <div className='panel' aria-expanded={isActive}>
            <div className='panel__label'
                 role='tab'
                 onClick={() => activateTab(index)}>
                <span>{question}</span>
            </div>
            <div className='panel__inner'
                 style={{height: `${isActive ? height : 0}px`}}
                 ref={bodyRef}
                 aria-hidden={!isActive}>
                <div className='panel__inner__content'>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}

// export default Accordion;