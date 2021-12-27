export default function ShopItem({img, title, price, href}) {
    return (
        <a href={href}>
            <div className="product" >
                <img src={img} alt={title} />
                <button className="button">Add to Cart</button>
                <h4>{title}</h4>
                <div className="price">Price <span>N{price}</span></div>
            </div>
        </a>
    );
}