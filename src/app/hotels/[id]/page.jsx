import SpecificHotel from "@/app/Components/SpecificHotel";
function page({params}) {
    const parmsID = params.id
    return (
        <div>
            <SpecificHotel paramsId={parmsID}/>
        </div>
    );
}

export default page;