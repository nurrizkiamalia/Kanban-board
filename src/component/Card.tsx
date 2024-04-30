import React, { useState } from 'react'
import boarddata from '../constant/boarddata'
import { CardData } from "../types"
import EmpyCardBox from './EmptyCardBox'
import CardBox from './CardBox'

export const getRandomColor = () => {
    const colors = [
      'bg-lavender',
      'bg-green',
      'bg-rose',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}

const Card: React.FC<{ card: CardData, onValueNameChange: (newValue: string) => void }> = ({ card, onValueNameChange }) => {

    const hasCardDetails = () => {
        if (Array.isArray(card.cardDetail)) {
            return card.cardDetail.length > 0;
        } else {
            return card.cardDetail && card.cardDetail.title;
        }
    }

    function handleValueNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        onValueNameChange(e.target.value)
    }

    return (
        <div className="card p-5 flex flex-col items-start justify-between gap-4 w-full min-w-[268px]">
            <input className={`text-cardTitle font-lightSF text-grey rounded-[20px] ${
                card.id === 1 ? "bg-lightGrey" : 
                card.id === 2 ? "bg-lavender" :
                card.id === 3 ? "bg-rose" : "bg-green"
                } text-center font-sf-compact-text placeholder:text-grey px-2 py-1 w-[40%]`} placeholder="Lane name" id="lane-name" value={card.valueName} onChange={handleValueNameChange} />
            {hasCardDetails() ? (
                Array.isArray(card.cardDetail) ? 
                    card.cardDetail.map((detail, index) => (
                        <CardBox key={index} cardDetail={detail} />
                    )) : (
                        <CardBox key={card.id} cardDetail={card.cardDetail} />
                )
            ) : (
                <EmpyCardBox />
            )}
        </div>
    )
}

const Board: React.FC = () => {
    const [boardData, setBoardData] = useState(boarddata)

    const handleValueNameChange = (cardId: number, newValue: string) => {
        setBoardData(prevData => prevData.map(card => {
            if (card.id === cardId) {
                return { ...card, valueName: newValue };
            }
            return card;
        }))
    }

    return (
        <div className={`board flex flex-row w-full items-start`}>
            {boardData.map((card, index) => (
                <Card 
                    key={index} 
                    card={card}
                    onValueNameChange={(newValue) => handleValueNameChange(card.id, newValue)}
                />
            ))}
        </div>
    )
}

export default Board