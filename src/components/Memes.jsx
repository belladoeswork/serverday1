
export default async function memes() {

    const response = await fetch("https://api.imgflip.com/get_memes");

    const info = await response.json();
    const memeImage = info.data.memes;

    return (
        <div>
            <div className="memes-container" >
                <p className='text'>
                    Here's an API to fetch random memes:
                    <a href={"https://api.imgflip.com/get_memes"}>https://api.imgflip.com/get_memes</a>
                </p>
                <div className="memes">
                    {memeImage.map((meme, name) => {
                        return <img key={name} src={meme.url} alt={`meme ${meme.name}`} />
                    })}
                </div>
            </div>
        </div>
    );
}