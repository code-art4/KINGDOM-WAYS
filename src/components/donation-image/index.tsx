export default function DonationImageItem({id, url, isMainImage, onCheck}) {
    return (
        <div className="col-md-2 mr-2 pt-1">
            <div className="row d-flex justify-content-center">
                <img src={url} height={50} width={50} alt={url} />
            </div>
            <div className="row">
                <span className="mr-2">Main Image</span>
                <input type="checkbox" name="image" checked={isMainImage} onClick={() => onCheck(id)} />
            </div>
        </div>
    );
}