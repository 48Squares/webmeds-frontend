export default function recentlyview() {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="bg-white h-20 flex justify-between p-4 items-center">
                <span className="text-2xl"><strong>Recently Views</strong></span>
                <button className="bg-regal-blue rounded px-4 py-2 text-white">View All</button>
            </div>
            <div className="flex border-t-2 ">
                <div className=" bg-white p-3">
                    <img src={"https://rukminim1.flixcart.com/image/850/1050/k5cs87k0/shoe/m/w/p/bl-sh-018-006-6-bluchers-1brown-original-imafdacvwzkph26f.jpeg?q=20"} className="h-32 w-48" />
                    <span className="text-2xl">SQR</span>
                    <span className="bg-gray-">Flip-Flpos</span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    );
}