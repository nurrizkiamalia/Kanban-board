import { getRandomColor } from "./Card"

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

  export default TagList