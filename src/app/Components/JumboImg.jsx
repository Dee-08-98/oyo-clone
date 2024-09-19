import Image from "next/image";

function JumboImg(props) {
    return (
        <div className="mx-20">
        <div className=" my-14">
          <Image
            src={"/banner1.avif"}
            alt="loading..."
            width={200}
            height={200}
            className=" h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="loading..."
            width={200}
            height={200}
            className=" h-40 w-full"
          />
        </div>
        </div>
    );
}

export default JumboImg;