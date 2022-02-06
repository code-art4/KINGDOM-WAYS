export default function ShopItemImage({id, url}) {
    return (
        <div className="col-md-2 mr-2 pt-1">
            <div className="row d-flex justify-content-center">
                <img src={url} height={50} width={50} alt={url} />
            </div>
        </div>
    );
}