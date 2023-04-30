import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import EditFlashCardSection from "../../components/Organisms/EditFlashCardSection/EditFlashCardSection";
import AddFlashCardsSection from "../../components/Organisms/AddFlashCardsSection/AddFlashCardsSection";
import FlashCardsListSection from "../../components/Organisms/FlashCardsListSection/FlashCardsListSection";
import { FlashCard } from "../../Interfaces/Interfaces";
import routes from "../../Routes/routes";
import { MaintenancePageWrapper } from "./MaintenancePage.styled";
type LocationProps = {
    state: {
      action: string;
    };
};


const MaintenancePage = () => {
    const {main} = routes;
    const[selectedFlashCard, setSelectedFlashCard ] = useState<FlashCard | undefined>(undefined);
    const[goToMain, setGoToMain] = useState(false);
    const location = useLocation() as LocationProps;
    const navigate = useNavigate();
    const action = location.state?.action;
    



    const openModal = (flashcard: FlashCard)=>{
        setSelectedFlashCard(flashcard);
    }
    const closeModal = ()=>{
        setSelectedFlashCard(undefined);
        setGoToMain(true);    
    }

  

    useEffect(()=> {
        if(goToMain){
            navigate(main);
        }
    },[goToMain, main, navigate]);


    return(
        <MaintenancePageWrapper>
             {action === "EDIT" && !selectedFlashCard && <FlashCardsListSection openModal={openModal}/>}
            {action === "ADD" && !selectedFlashCard && <AddFlashCardsSection/>}
            {selectedFlashCard && <EditFlashCardSection flashCard={selectedFlashCard} closeModal={closeModal} />}   
          
        </MaintenancePageWrapper>
    );
};

export default MaintenancePage;

