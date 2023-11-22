import { useState } from "react";
import styles from "./PromptQuestions.module.css";

interface Props {
    question: string;
    onSend: (question: string, id?: string) => void;
    conversationId?: string;
}

export const PromptQuestions = (props: Props) => {
    const [question, setQuestion] = useState<string>(props.question)

    function handlePromptClick(){
        if(props.conversationId){
            props.onSend(question, props.conversationId);
        }else{
            props.onSend(question);
        }
    }

    return(
        <button onClick={() => handlePromptClick()}>{question}</button>
    )
};
