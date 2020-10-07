import React from 'react';

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div>
                <img  className="w-full" src={image.webformatURL} alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {image.user}
                    </div>
                    <ul style={{listStyle: "none", padding: "0"}}>
                        <li>
                            <strong>View: {image.views} </strong>
                        </li>
                        <li>
                            <strong>Downloads: {image.downloads}  </strong>
                        </li>
                        <li>
                        <   strong>Likes: {image.likes}</strong>
                        </li>
                    </ul>
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-danger text-white rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageCard;