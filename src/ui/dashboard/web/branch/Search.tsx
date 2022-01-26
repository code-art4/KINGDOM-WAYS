export default function BranchSearch({location}) {
    return (
        <>
            <section className="search_wrapper">
                <h3 className="section_subtitle">City</h3>

                <div className="location_search">
                    <input className="event_searcher" type="search" name="search" id="search" />
                    <a href="#" className="button">Search</a>
                </div>
                <span className="grey_text">
                    <p>Search for branches near you </p>
                </span>
            </section>
            <section className="locate_wrapper">
                <h2>
                   <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                   {location}
                </h2>
                <hr />
            </section>
        </>
    );
}