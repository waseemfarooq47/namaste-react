import { useEffect ,useState} from "react";

const useRestaurantCard = () => {
  const [mylist, setMyList] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setMyList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {mylist,setMyList,filteredData,setFilteredData}
};

export default useRestaurantCard;




useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();

  console.log(
    json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
  setMyList(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFilteredData(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
};

// if (mylist.length === 0) {
//   return ;
// }
