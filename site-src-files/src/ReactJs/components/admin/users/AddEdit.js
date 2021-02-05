const Content = () => {
    return (
        <div>
            <div>
                <label htmlFor="email">Email of user: </label>
                <input id="email" type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="type">Type of user: </label>
                <input id="type" type="text" name="type"/>
            </div>
        </div>
    )
}

export default Content;