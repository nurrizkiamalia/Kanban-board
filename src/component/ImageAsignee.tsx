const ImageSingle: React.FC <{ image: string }> = ({ image }) => {
    return(
        <img className=' object-cover w-fit rounded-full ' src={`assets/${image}`} alt={`Assignee Image`} />
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

export default ImageAssignee