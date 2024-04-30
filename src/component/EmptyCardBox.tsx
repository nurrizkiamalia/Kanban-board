const EmpyCardBox: React.FC = () => {
    return(
        <div className="w-full min-w-[268px]">
            <p className="card-content flex flex-col gap-2 bg-white shadow-md rounded-lg p-4 w-full items-start cursor-grabbing justify-centertext-center">Nothing to be done 😊</p>
            <img src="assets/thisIsFine.png" alt="No tasks" className="mx-auto mt-5"/>
        </div>
    )
}

export default EmpyCardBox