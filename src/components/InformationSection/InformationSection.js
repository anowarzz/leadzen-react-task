import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import DetailInformationModal from "../DetailInformationModal/DetailInformationModal";
import ShortInformationCard from "../ShortInformationCard/ShortInformationCard";
import "./InformationSection.css"




const InformationSection = () => {
  // state to store client details
  const [clients, setClients] = useState(null);

// state to show and hide modal and details information
 const [detailInfo, setDetailInfo] = useState(null)


// states for pagination



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


  // Pagination state and functions
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 3 ;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = clients?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(clients?.length / itemsPerPage);


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % clients.length;
    setItemOffset(newOffset);
  };








  return (
    <div>
      {clients &&
         currentItems?.map((client) => (
          <ShortInformationCard key={client.id} client={client} setDetailInfo = {setDetailInfo}/>
        ))}

<ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />


   {
      detailInfo && <DetailInformationModal detailInfo = {detailInfo} setDetailInfo = {setDetailInfo}/>
   }
    </div>
  );
};

export default InformationSection;
