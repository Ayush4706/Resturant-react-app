import React,{useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'


const uniqueList=
[
...new Set(Menu.map((currElem)=>{
  return currElem.category;
})
),
"ALL",
]

console.log(uniqueList)

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);


  const filterItems=(category)=>{

    if(category=="ALL")
    {
      setmenuData(Menu);
      return;
    }

    const updatedList=Menu.filter((currElem)=>
    {
      return currElem.category===category;
    });
    setmenuData(updatedList);
  };



  return (
    <>
    <Navbar filterItems={filterItems} menuList={menuList} />
    <MenuCard menuData={menuData} />
    </>
);
}
  

export default Resturant
