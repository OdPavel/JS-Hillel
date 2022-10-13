import data from './data.json'

const Catalog = () => {
    console.log(data)
    return (
        <div className="container">
            <ul>
                {data.map((item) =>
                    <li key={item.id}
                    >





                        <b>Data: </b>{item.createdAt}< br />

                        <b>Author: </b>{item.name}
                        <img src={item.avatar} alt="" />

                    </li>

                )}
            </ul>
        </div >

    )
}

export default Catalog