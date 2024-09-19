import Image from "next/image";
import Logo from "./Components/Logo";
import State from "./Components/State";
import SearchBanner from "./Components/SearchBanner";
import JumboImg from "./Components/JumboImg";
import Header4 from "./Components/Header4";

export default function Home() {
  return (
    <>
      <Logo />
      <State/>
      <SearchBanner/>
      <JumboImg/>
      <Header4/>
    </>
  )
}
