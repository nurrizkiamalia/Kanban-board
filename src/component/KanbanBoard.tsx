import Board from "./Card"

const KanbanBoard: React.FC = () => {

    return(
        <div className=" m-10 flex flex-col gap-2 justify-start items-start">
            <input className=" text-boardTitle text-blackGrey font-bold placeholder:text-blackGrey " type="text" id="starter-title " placeholder='Starter Board' />
            <input className=" text-label text-darkGrey placeholder:text-darkGrey " type="text" id="board-desc" placeholder='A description of a board' />

            <div className={` overflow-x-auto flex flex-row bg-lightBgGrey rounded-xl justify-start items-center w-full mt-5 `}>
                <Board />
            </div>
        </div>
    )
}

export default KanbanBoard