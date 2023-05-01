import { FlashCard } from "../../../Interfaces/Interfaces";
import EditFlashCardsForm from "../EditFlashCardForm/EditFlashCardForm";
import { EditFlashCardSectionWrapper, EditPerson } from "./EditFlashCardSection.styled"

interface Props{
   flashCard: FlashCard;
    closeModal: ()=> void;
}

const EditFlashCardSection = (props: Props)=>{
const{flashCard, closeModal}=props;
    return(
        <EditFlashCardSectionWrapper>
                <EditFlashCardsForm flashCard={flashCard} closeModal={closeModal}/>
                <EditPerson/>
        </EditFlashCardSectionWrapper>
    )
}

export default EditFlashCardSection;