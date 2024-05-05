import Project from "../components/UI/Project";

export default function PortfolioPage(){
    return (
        <div>Portfolio page text <br></br>
        <div className="container-fluid">
            <div className="row">
                <div className="card-deck">
                    <Project />
                </div>
            </div>
        </div>
        </div>
    )
}