
export default async function dog() {

    const response = await fetch("https://dog.ceo/api/breeds/image/random/10");

    const info = await response.json();
    const dogImage = info.message;

    return (
        <div>
            <h3>Dogs</h3>
            <div className="dogs-container" >
                <p className='text'>
                    Here's an API to fetch 10 random dog images:
                    <a href={"https://dog.ceo/api/breeds/image/random/3"}>https://dog.ceo/api/breeds/image/random/10</a>
                </p>
                <div className="dogs">
                    {dogImage.map((dogImageUrl, index) => {
                        return <img key={index} src={dogImageUrl} alt={`Dog ${index}`} />
                    })}
                </div>
            </div>
        </div>
    );
}