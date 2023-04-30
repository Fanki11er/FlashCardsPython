import { FlashCardsListElementWrapper } from "./FlashCardsListElement..styles"

interface Props{
    content: string;
    id: number;
    select: (id: number) => void;
}

const FlashCardsListElement = (props: Props)=>{
    const {content, id, select} = props;
    return (
        <FlashCardsListElementWrapper onClick={()=>select(id)}>
            {content}
        </FlashCardsListElementWrapper>
    )
}

export default FlashCardsListElement;