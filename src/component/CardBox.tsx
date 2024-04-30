import ImageAssignee from "./ImageAsignee"
import TaskList from "./TaskList"
import TagList from "./TagList"
import { CardDetail } from "../types"

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

export default CardBox