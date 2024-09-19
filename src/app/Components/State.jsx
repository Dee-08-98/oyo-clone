
function State() {

    const List = [
        {
            name:"Bengalore"
        },
        {
            name:"Chennai"
        },{
            name:"Delhi"
        },{
            name:"Gurgaon"
        },{
            name:"Hyderabad"
        },{
            name:"Kolkata"
        },{
            name:"Mumbai"
        },{
            name:"Noida"
        },{
            name:"Pune"
        },
        {
            name:"All Cities"
        }

    ]
    return (
        <div className=' text-black h-10 w-full bg-gray-200 flex justify-evenly items-center px-14'>
           {
            List.map((item)=>{
                return  <h3 className='font-bold' key={item.name}> {item.name}</h3>
            })
           }
           

        </div>
    );
}

export default State;