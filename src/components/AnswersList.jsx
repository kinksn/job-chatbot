import React from 'react'
import {Answer} from './index';

const AnswersList = (props) => {
    return (
        <div className="c-grid__answer">
            {props.answers.map((answer, index) => {
                return <Answer content={answer.content} key={index.toString()} nextId={answer.nextId} select={props.select} />
            })}
        </div>
    )
}

export default AnswersList