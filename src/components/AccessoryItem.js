export default function AccessoryItem({accessory, active}) {
    return (
        <div key={accessory.id} className={active ? "accesories-item active" : "accesories-item"}>
            <p className="accesories-price">{ accessory.price }</p>
            <img alt="" className="accessories-image" src={process.env.PUBLIC_URL+'/assets/'+accessory.image} />
            <div className="desc">
                <h2 className="accesories-name">{ accessory.name }</h2>
                <p className="accesories-category">{ accessory.category }</p>
            </div>
        </div>
    );
}