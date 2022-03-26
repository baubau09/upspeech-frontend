const Loader = ({ show, width, height }) => {
    return show ?
        <>  
            <div>
                <img src="/loader.svg" width={width} height={height}/>
            </div>
            {/* <div className="loadingio-spinner-bars-bf2kyntsnjq">
                <div className="ldio-8wzf0oy1hdi">
                    <div></div><div></div><div></div><div></div>
                </div></div> */}
        </>
        : null;
};

export default Loader;