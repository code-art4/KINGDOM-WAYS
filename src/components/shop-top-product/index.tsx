export default function ShopTopProductItem({img, title, price, href, copies}) {
    return (
        <>
            <div className="topProduct">
                <img src={img} alt={title} />
                <div className="aboutTopProduct">
                    <div className="name">{title}</div>
                    <div className="price">Price <span>N{price}</span></div>
                    <div className="copies">{copies} copies available</div>
                </div>
            </div>
        </>
    );
}