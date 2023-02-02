import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailInformationModal from "../DetailInformationModal/DetailInformationModal";
import ShortInformationCard from "../ShortInformationCard/ShortInformationCard";

const InformationSection = () => {
  // state to store client details
  const [clients, setClients] = useState(null);

// state to show and hide modal and details information
 const [detailInfo, setDetailInfo] = useState(null)


  // Loading data from database through api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setClients(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);







  return (
    <div>
      {clients &&
        clients?.map((client) => (
          <ShortInformationCard key={client.id} client={client} detailInfo = {detailInfo} setDetailInfo = {setDetailInfo}/>
        ))}

   {
      detailInfo && <DetailInformationModal />
   }
    </div>
  );
};

export default InformationSection;
