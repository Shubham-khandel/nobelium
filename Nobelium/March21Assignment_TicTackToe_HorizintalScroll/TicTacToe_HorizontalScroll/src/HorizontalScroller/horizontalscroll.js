import InnerBox from "./innerBox";
import './horizontalscroll.css'

const mentor1 = {
    name: "Amit",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    designation: "Graphic Designer",
    experience:
      "4 Years",
  };
  
  const mentor2 = {
    name: "Ruhi",
    image:
      "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      experience: "4 Years",
    designation: "Product Manager",
  };

  const mentor3 = {
    name: "Rashmi",
    image:
      "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      experience: "5 Years",
    designation: "Developer",
  };

  const mentor4 = {
    name: "Sumit",
    image:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
      experience: "3 Years",
    designation: "Manager",
  };

  const mentor5 = {
    name: "Hariom",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      experience: "2 Years",
    designation: "Manager",
  };

function Scroll(){
    return(
        <div className="container">
            <InnerBox data={mentor1}/>
            <InnerBox data={mentor2}/>
            <InnerBox data={mentor3}/>
            <InnerBox data={mentor4}/>
            <InnerBox data={mentor5}/>
            <InnerBox data={mentor1}/>
            <InnerBox data={mentor2}/>
            <InnerBox data={mentor3}/>
            <InnerBox data={mentor4}/>
            <InnerBox data={mentor5}/>
            <InnerBox data={mentor1}/>
            <InnerBox data={mentor2}/>
            <InnerBox data={mentor3}/>
            <InnerBox data={mentor4}/>
            <InnerBox data={mentor5}/>
        </div>
    )
};

export default Scroll;