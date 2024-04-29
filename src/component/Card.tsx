import React, { useState } from 'react'
import boarddata from '../constant/boarddata'
import { CardData, CardDetail } from "../types"

const getRandomColor = () => {
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
                <div className="w-full min-w-[268px]">
                    <p className="card-content flex flex-col gap-2 bg-white shadow-md rounded-lg p-4 w-full items-start cursor-grabbing justify-centertext-center">Nothing to be done 😊</p>
                    <img src="src/assets/thisIsFine.png" alt="No tasks" className="mx-auto mt-5"/>
                </div>
            )}
        </div>
    )
}

const CardBox: React.FC<{ cardDetail: CardDetail }> = ({ cardDetail }) => {

    return (
        <div className="card-content flex flex-col gap-2 bg-white shadow-md rounded-lg p-4 w-full items-start cursor-grabbing">
            {cardDetail.image && <ImageAssignee images={cardDetail.image} />}
            <h3 className="text-cardTitle font-semibold">{cardDetail.title}</h3>
            {cardDetail.description && <p className="text-label font-normal text-darkGrey">{cardDetail.description}</p>}
            {cardDetail.task && <TaskList tasks={cardDetail.task} />}
            {cardDetail.tag && <TagList tags={cardDetail.tag} />}
        </div>
    )
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => {

    return (
        <>
            <p className={` rounded-2xl py-1 px-2 ${getRandomColor()} `}>{tag}</p>
        </>
        
    )
}

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
    return (
      <div className={`flex flex-row gap-2 justify-start items-center font-semibold text-label`}>
        {Array.from(tags).map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    )
  }

const ImageSingle: React.FC <{ image: string }> = ({ image }) => {
    return(
        <img className=' object-cover w-fit rounded-full ' src={`src/assets/${image}`} alt={`Assignee Image`} />
    )
}

const ImageAssignee: React.FC<{ images: string[] }> = ({ images }) => {
    return (
        <div className='flex gap-2'>
            {images.map((image, index) => (
                <ImageSingle key={index} image={image} />
            ))}
        </div>
    )
}

const Task: React.FC <{ task: string }> = ({ task }) => {
    const [done, setDone] = useState(false);

    return (
        <div onClick={() => setDone(!done)} className='flex gap-3 items-center justify-start cursor-pointer '>
        <img src={done === false ? "src/assets/Unchecked.png" : "src/assets/Checked.png"} />
        <span  className={`${done ? "line-through decoration-double" : ""} text-task text-darkGrey text-label `}>{task}</span>
        </div>
        
    )
}

const TaskList: React.FC<{ tasks: string[] }> = ({ tasks }) => {
    return (
        <div className="task-list flex flex-col gap-1 items-start">
            {tasks.map((task, index) => (
                <div key={index} className="task-detail">
                    <span className="task-desc"><Task task={task}/></span>
                </div>
            ))}
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